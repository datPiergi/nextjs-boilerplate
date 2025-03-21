import { NextResponse } from "next/server";
import { addGuestToSheet } from "@/utils/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, rsvp, meal } = body;

    if (!name || !email || !rsvp || !meal) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await addGuestToSheet({ name, email, rsvp, meal });

    return NextResponse.json({ message: "Guest added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error adding guest:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
