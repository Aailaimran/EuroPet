import { google } from 'googleapis'

function getGoogleAuth() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
    ?.replace(/\\n/g, '\n')

  if (!privateKey || 
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
    throw new Error(
      'Google Sheets credentials not configured'
    )
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: 
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  return auth
}

export async function appendToSheet(
  sheetName: string,
  values: string[]
): Promise<void> {
  const spreadsheetId = 
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!spreadsheetId) {
    throw new Error(
      'GOOGLE_SHEETS_SPREADSHEET_ID not set'
    )
  }

  const auth = getGoogleAuth()
  const sheets = google.sheets({ 
    version: 'v4', 
    auth 
  })

  const timestamp = new Date().toLocaleString(
    'en-GB', { timeZone: 'Europe/London' }
  )

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[timestamp, ...values]],
    },
  })
}

export async function initSheetHeaders(): 
  Promise<void> {
  const spreadsheetId = 
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  if (!spreadsheetId) return

  const auth = getGoogleAuth()
  const sheets = google.sheets({ 
    version: 'v4', 
    auth 
  })

  // Define headers for each sheet tab
  const sheetHeaders = {
    'Quote Requests': [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Pet Type',
      'Pet Name',
      'Breed',
      'Pet Age',
      'Pet Weight (kg)',
      'Route',
      'Collection City & Country',
      'Delivery City & Country',
      'Preferred Travel Date',
      'Service Type',
      'Message',
      'Consent Given',
    ],
    'Rescue Enquiries': [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Best Time to Call',
      'Dog Name',
      'Dog Breed',
      'Dog Location',
      'Questions',
      'How Did They Hear',
      'Consent Given',
    ],
    'Newsletter Subscribers': [
      'Timestamp',
      'Email Address',
      'Source',
    ],
  }

  for (const [sheetName, headers] of 
    Object.entries(sheetHeaders)) {
    try {
      // Check if headers already exist
      const response = await sheets
        .spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A1:Z1`,
      })

      // Only add headers if row 1 is empty
      if (!response.data.values || 
          response.data.values.length === 0) {
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${sheetName}!A1`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [headers],
          },
        })
      }
    } catch (error) {
      console.error(
        `Failed to init headers for 
        ${sheetName}:`, error
      )
    }
  }
}
