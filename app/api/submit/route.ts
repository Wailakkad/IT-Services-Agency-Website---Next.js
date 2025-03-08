// app/api/submit/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, message } = await request.json();

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append data to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1", // Adjust the range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstname, lastname, email, message]],
      },
    });

    // Return success response
    return NextResponse.json(
      { message: "Data appended successfully", data: response.data },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error appending data to Google Sheet:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}