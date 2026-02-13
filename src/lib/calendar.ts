import { google } from "googleapis";

// Load credentials from environment variables
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
const calendarId = process.env.GOOGLE_CALENDAR_ID;

if (!clientEmail || !privateKey || !calendarId) {
  console.warn("Google calendar credentials are not fully configured.");
}

const auth = new google.auth.JWT({
  email: clientEmail,
  key: privateKey?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

export interface CalendarEventOptions {
  summary: string;
  description?: string;
  start: { dateTime: string; timeZone?: string };
  end: { dateTime: string; timeZone?: string };
  attendees?: Array<{ email: string }>;
  sendUpdates?: "all" | "none";
}

export async function createCalendarEvent(opts: CalendarEventOptions) {
  // Fall back to primary if not set
  const cid = calendarId || "primary";
  
  if (!calendarId) {
    console.warn("GOOGLE_CALENDAR_ID not set; using 'primary' calendar instead.");
  }

  // ✅ FIXED: Removed 'conferenceData' to prevent "Invalid conference type" error
  const res = await calendar.events.insert({
    calendarId: cid,
    requestBody: {
      ...opts,
      // We removed the auto-meeting generation here because Service Accounts
      // cannot create Google Meets on personal Gmail accounts.
    },
    // We can keep this or remove it, it doesn't hurt if we aren't sending conference data
    conferenceDataVersion: 0, 
    sendUpdates: opts.sendUpdates || "all",
  });

  return res.data;
}