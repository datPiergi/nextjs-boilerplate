import { createClient, EdgeConfigClient } from "@vercel/edge-config";

if (!process.env.EDGE_CONFIG) {
  throw new Error("Missing EDGE_CONFIG environment variable");
}

class EdgeConfigService {
  private client: EdgeConfigClient;

  constructor() {
    this.client = createClient(process.env.EDGE_CONFIG);
  }

  async getValue<T>(key: string): Promise<T | undefined> {
    try {
      return await this.client.get<T>(key);
    } catch (error) {
      console.error(`Error fetching Edge Config value for key: ${key}`, error);
      return {} as T;
    }
  }

  async hasKey(key: string): Promise<boolean> {
    const value = await this.getValue(key);
    return value !== null;
  }
}

// Export a **singleton** instance
export const edgeConfigService = new EdgeConfigService();
