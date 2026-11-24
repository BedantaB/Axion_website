// Google Apps Script web app that saves enquiries and job applications to a private
// Google Sheet (and resumes to Google Drive). See apps-script/Code.gs and README.md.
const SHEETS_URL = import.meta.env.VITE_SHEETS_WEBAPP_URL;

/** POST fields to the Apps Script web app. Throws if it is not configured or rejects the data. */
export async function submitToSheet(fields) {
  if (!SHEETS_URL) throw new Error("VITE_SHEETS_WEBAPP_URL is not set");
  // A form-encoded body keeps this a "simple" request, which Apps Script accepts cross-origin.
  const res = await fetch(SHEETS_URL, {
    method: "POST",
    body: new URLSearchParams({ ...fields, page: window.location.pathname }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "Submission failed");
  return data;
}
