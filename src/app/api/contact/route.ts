import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"MNSAI Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New Enquiry${service ? ` — ${service}` : ""} from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f1f35; padding: 24px 32px;">
          <h1 style="color: #d4af37; font-size: 20px; margin: 0;">MNSAI — New Website Enquiry</h1>
        </div>
        <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 140px; vertical-align: top;">Full Name</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #c9a227;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #111827;">${phone}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Service Required</td>
              <td style="padding: 10px 0; color: #111827;">${service}</td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #111827; white-space: pre-line; margin: 0;">${message}</p>
        </div>
        <div style="background: #0f1f35; padding: 16px 32px;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">
            Sent from the contact form at www.mnsai.com — Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
