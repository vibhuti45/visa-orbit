import nodemailer from "nodemailer";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  html: string;
}

export async function sendMail(opts: SendMailOptions) {
  // 1. Log the credentials being used (Masked for safety)
  console.log("Attempting to send email...");
  console.log("Host:", process.env.SMTP_HOST);
  console.log("User:", process.env.SMTP_USER);
  console.log("Pass exists?", !!process.env.SMTP_PASS); // Should say 'true'

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // This MUST be the 16-char App Password
    },
    // Useful for debugging local connection issues
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // 2. Verify connection configuration
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error("❌ SMTP Connection Error:", error);
          reject(error);
        } else {
          console.log("✅ SMTP Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    // 3. Send the email
    const info = await transporter.sendMail({
      from: `"Visa Orbit" <${process.env.SMTP_USER}>`,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    });

    console.log("✅ Email sent: %s", info.messageId);
    return info;

  } catch (error) {
    console.error("❌ Failed to send email:", error);
    // Throwing error here so the API Route knows it failed
    throw error;
  }
}