/**
 * Axion Space — enquiry form → Google Sheet.
 *
 * Paste this into Extensions → Apps Script of your Google Sheet and deploy it
 * as a Web app (Execute as: Me, Who has access: Anyone). See README.md.
 *
 * The web app can only append rows. Nobody can read the sheet through it;
 * the sheet itself stays private to your Google account.
 */

const SHEET_NAME = "Enquiries";
const HEADERS = ["Submitted At", "Name", "Phone", "Email", "Interest", "Message", "Page"];
const MAX_LEN = 2000;

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};

    // Honeypot: real visitors never fill this hidden field; bots often do.
    if (p.website) return json({ ok: true });

    if (!p.name || !p.phone || !p.email) {
      return json({ ok: false, error: "Missing required fields" });
    }

    const sheet = getSheet();
    sheet.appendRow([
      new Date(),
      clean(p.name),
      clean(p.phone),
      clean(p.email),
      clean(p.interest),
      clean(p.message),
      clean(p.page),
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Trim, cap length, and stop values like "=HYPERLINK(...)" being run as formulas.
function clean(v) {
  const s = String(v || "").trim().slice(0, MAX_LEN);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
