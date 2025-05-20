import { google } from "googleapis";


export interface SignupFormData {
  username: string;
  email: string;
}

const auth = new google.auth.GoogleAuth({
  keyFilename: '/Users/hemanthgirimath/Downloads/form.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function saveToGoogleSheets(data: SignupFormData) {
  const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });

  return sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: 'Monarch',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[new Date().toISOString(), data.username, data.email]],
    },
  });
}
