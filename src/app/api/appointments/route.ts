import { NextRequest, NextResponse } from "next/server";
import { createCalendarEvent } from "../../../lib/calendar";
import { sendMail } from "../../../lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, service, questions, date, time } = data;

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
      return NextResponse.json({ success: false, error: "Google service account credentials are not configured." }, { status: 500 });
    }

    // 1. Build Dates
    const startDate = new Date(`${date}T${time}`);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // 30min slot

    // 2. Define a Permanent Meeting Link (Recommended workaround)
    // Go to meet.google.com -> New Meeting -> Create for later -> Copy link
    const staticMeetLink = "https://meet.google.com/anu-amey-cbw"; 

    // 3. Create Event WITHOUT conferenceData (Fixes the crash)
    const event = await createCalendarEvent({
      summary: `Consultation: ${service}`,
      // We put the link in the description so you see it on your calendar too
      description: `Client: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuestions: ${questions || "-"}\n\nMeeting Link: ${staticMeetLink}`,
      start: { dateTime: startDate.toISOString() },
      end: { dateTime: endDate.toISOString() },
      // attendees: removed to prevent permission errors
    });

    // 4. Send Confirmation Email manually
    const html = `
      <div style="font-family: sans-serif; color: #333;">
        <h2>Visa Orbit Consultation Confirmed</h2>
        <p>Hi ${name},</p>
        <p>Your consultation regarding <strong>${service}</strong> has been scheduled.</p>
        <p><strong>Date:</strong> ${startDate.toLocaleString()}</p>
        <p><strong>Google Meet Link:</strong> <a href="${staticMeetLink}">${staticMeetLink}</a></p>
        <br/>
        <p>If you need to reschedule, please reply to this email.</p>
      </div>
    `;

    await sendMail({
      to: [email, "visaorbitconsultancy@gmail.com"],
      subject: "Your Visa Orbit Consultation Confirmation",
      html,
    });

    return NextResponse.json({ success: true, meetLink: staticMeetLink });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}