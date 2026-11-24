/**
 * Axion Space — website forms → Google Sheet (+ resumes → Google Drive).
 *
 * Paste this into Extensions → Apps Script of your Google Sheet and deploy it
 * as a Web app (Execute as: Me, Who has access: Anyone). See README.md.
 *
 * - Enquiry form   → "Enquiries" tab
 * - Careers form   → "Careers" tab; the resume is saved to a private Drive
 *                    folder ("Axion Careers — Resumes") and linked in the row.
 *
 * The web app can only add rows and files. Nobody can read the sheet or the
 * folder through it; both stay private to your Google account.
 */

const ENQUIRY_SHEET = "Enquiries";
const ENQUIRY_HEADERS = ["Submitted At", "Name", "Phone", "Email", "Interest", "Message", "Page"];

const CAREERS_SHEET = "Careers";
const CAREERS_HEADERS = [
  "Submitted At", "Name", "Phone", "Email", "Role", "Current Compensation",
  "Notice Period", "Portfolio / LinkedIn", "Track Record / Message", "Resume",
];
const RESUME_FOLDER = "Axion Careers — Resumes";
const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const RESUME_MAX_BYTES = 5 * 1024 * 1024;

const MAX_LEN = 2000;

/**
 * Run this once from the Apps Script editor (select "authorize" → Run) after
 * pasting a new version, so Google asks you to approve Sheets + Drive access.
 */
function authorize() {
  getSheet(CAREERS_SHEET, CAREERS_HEADERS);
  getFolder(RESUME_FOLDER);
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};

    // Honeypot: real visitors never fill this hidden field; bots often do.
    if (p.website) return json({ ok: true });

    if (!p.name || !p.phone || !p.email) {
      return json({ ok: false, error: "Missing required fields" });
    }

    return p.form === "career" ? saveCareer(p) : saveEnquiry(p);
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function saveEnquiry(p) {
  getSheet(ENQUIRY_SHEET, ENQUIRY_HEADERS).appendRow([
    new Date(),
    clean(p.name),
    clean(p.phone),
    clean(p.email),
    clean(p.interest),
    clean(p.message),
    clean(p.page),
  ]);
  return json({ ok: true });
}

function saveCareer(p) {
  if (!p.role) return json({ ok: false, error: "Missing role" });
  if (!p.resumeData) return json({ ok: false, error: "Missing resume" });
  if (RESUME_TYPES.indexOf(p.resumeType) === -1) {
    return json({ ok: false, error: "Resume must be a PDF or Word document" });
  }
  const bytes = Utilities.base64Decode(p.resumeData);
  if (bytes.length > RESUME_MAX_BYTES) return json({ ok: false, error: "Resume is larger than 5 MB" });

  const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HHmm");
  const fileName = `${stamp} — ${String(p.name).trim().slice(0, 80)} — ${String(p.resumeName || "resume").slice(0, 120)}`;
  const file = getFolder(RESUME_FOLDER).createFile(Utilities.newBlob(bytes, p.resumeType, fileName));

  getSheet(CAREERS_SHEET, CAREERS_HEADERS).appendRow([
    new Date(),
    clean(p.name),
    clean(p.phone),
    clean(p.email),
    clean(p.role),
    clean(p.compensation),
    clean(p.notice),
    clean(p.portfolio),
    clean(p.message),
    file.getUrl(),
  ]);
  return json({ ok: true });
}

function getSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getFolder(name) {
  const found = DriveApp.getFoldersByName(name);
  return found.hasNext() ? found.next() : DriveApp.createFolder(name);
}

// Trim, cap length, and stop values like "=HYPERLINK(...)" being run as formulas.
function clean(v) {
  const s = String(v || "").trim().slice(0, MAX_LEN);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
