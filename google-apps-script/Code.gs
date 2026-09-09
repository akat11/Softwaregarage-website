function doPost(e) {
  try {
    let data = {};

    if (e && e.parameter) {
      data = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    const fullName = String(data.fullName || '').trim();
    const email = String(data.email || '').trim();
    const company = String(data.company || '').trim();
    const projectType = String(data.projectType || '').trim();
    const budget = String(data.budget || '').trim();
    const description = String(data.description || '').trim();
    const honeypot = String(data.honeypot || '').trim();

    if (honeypot) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Spam rejected' })).setMimeType(ContentService.MimeType.JSON);
    }

    if (!fullName || !email || !projectType || !description) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Missing required fields' })).setMimeType(ContentService.MimeType.JSON);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Invalid email' })).setMimeType(ContentService.MimeType.JSON);
    }

    if (fullName.length > 200 || email.length > 200 || company.length > 200 || projectType.length > 200 || budget.length > 200 || description.length > 5000) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Field length exceeded' })).setMimeType(ContentService.MimeType.JSON);
    }

    const spreadsheetId = 'PASTE_YOUR_SPREADSHEET_ID_HERE';
    const sheetName = 'Leads';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Company / Organization', 'Project Type', 'Budget Range', 'Project Description']);
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const requiredHeaders = ['Timestamp', 'Full Name', 'Email', 'Company / Organization', 'Project Type', 'Budget Range', 'Project Description'];

    if (headers.length === 0 || headers[0] !== 'Timestamp' || !requiredHeaders.every((header) => headers.includes(header))) {
      const existing = headers.length ? headers : [];
      const finalHeaders = [...new Set([...requiredHeaders, ...existing])];
      sheet.getRange(1, 1, 1, finalHeaders.length).setValues([finalHeaders]);
    }

    const timestamp = new Date();
    const row = [
      timestamp.toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
      fullName,
      email,
      company,
      projectType,
      budget,
      description,
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message || 'Failed to save lead' })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Google Apps Script form receiver is working. Use POST.');
}
