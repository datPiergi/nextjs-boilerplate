import { NextResponse } from "next/server";
import { addSongToSheet } from "@/utils/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { song } = body;

    if (!song) {
      return NextResponse.json({ error: "Missing required field: song" }, { status: 400 });
    }

    await addSongToSheet({ song });

    return NextResponse.json({ message: "Song added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error adding song:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
