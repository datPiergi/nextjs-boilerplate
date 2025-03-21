import { google } from "googleapis";
import { JWT } from "google-auth-library";
import fs from "fs";
import path from "path";

// Load service account key from JSON file
const KEY_PATH = path.join(process.cwd(), "keys", "service-account.json");
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Read and parse the key file
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Fix newlines
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function addGuestToSheet(guest: {
  name: string;
  email: string;
  rsvp: string;
  meal: string;
}) {
  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  const RANGE = "Guests!A:D";

  const values = [[guest.name, guest.email, guest.rsvp, guest.meal]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });

  console.log("Guest added:", guest);
}
