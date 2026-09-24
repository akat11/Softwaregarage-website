# Contact Form to Google Sheet Setup

This is the simplest way to send the existing contact form data to a Google Sheet without creating a separate backend or database.

## Step 1: Create the Google Sheet

1. Open Google Sheets.
2. Create a new sheet.
3. Name it exactly:
   Software Garage Leads

## Step 2: Create the tab

1. In the sheet, create a tab named:
   Leads

## Step 3: Add the headers

Add these headers in row 1:

Timestamp
Full Name
Email
Company / Organization
Project Type
Budget Range
Project Description

## Step 4: Open Apps Script

1. In the sheet, go to:
   Extensions → Apps Script
2. Delete the default code if any.
3. Paste the contents of the Code.gs file from this project.

## Step 5: Configure the spreadsheet ID

Inside Code.gs, update this line:

const spreadsheetId = 'PASTE_YOUR_SPREADSHEET_ID_HERE';

Replace it with your actual Google Sheet ID.

How to find the spreadsheet ID:
1. Open the Google Sheet.
2. Look at the URL.
3. It looks like:
   https://docs.google.com/spreadsheets/d/XXXXXXXXXXXX/edit
4. The long value between /d/ and /edit is the Spreadsheet ID.

## Step 6: Deploy as a Web App

1. In Apps Script, click Deploy.
2. Choose New deployment.
3. Select type: Web app.
4. Set:
   - Execute as: Me
   - Who has access: Anyone
5. Click Deploy.
6. The Apps Script will ask for Google authorization the first time.

Important:
This step requires a manual Google login and authorization. VS Code cannot do this for you automatically.

## Step 7: Copy the Web App URL

After deployment, copy the generated Web App URL.

## Step 8: Update the website

Open the Contact page JavaScript and replace:

const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

with the actual Web App URL.

## Step 9: Test the form

1. Open the Contact page.
2. Fill in the form.
3. Click SEND PROJECT BRIEF.
4. Check Google Sheets → Leads.
5. A new row should appear with the submitted data.

## Notes

- No email notifications are sent.
- No database is required.
- No complex server setup is required.
- The submission is added directly to the Google Sheet.

This setup is intentionally simple and lightweight for a static website.
