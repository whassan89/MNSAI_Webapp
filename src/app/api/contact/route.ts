import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FIRM_EMAIL = "mnsai.official@gmail.com";
const SENDER = "no-reply@mnsai.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; phone?: string; service?: string; message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name = "", email = "", phone = "", service = "", message = "" } = body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const { BREVO_LOGIN, BREVO_SMTP_KEY } = process.env;

  if (!BREVO_LOGIN || !BREVO_SMTP_KEY) {
    console.error("Missing BREVO_LOGIN or BREVO_SMTP_KEY environment variables.");
    return NextResponse.json(
      { error: "Mail service is not configured. Please contact us directly at ceo@mnsai.com." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: { user: BREVO_LOGIN, pass: BREVO_SMTP_KEY },
  });

  // Email to the firm
  const internalMail = {
    from: `"MNSAI Website" <${SENDER}>`,
    to: FIRM_EMAIL,
    replyTo: email,
    subject: `New Enquiry${service ? ` — ${service}` : ""} from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#284F70;padding:24px 32px;">
          <h1 style="color:#36B54A;font-size:20px;margin:0;">MNSAI — New Website Enquiry</h1>
        </div>
        <div style="background:#f9fafb;padding:32px;border:1px solid #e5e7eb;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;width:140px;vertical-align:top;">Full Name</td>
              <td style="padding:10px 0;color:#111827;font-weight:600;">${esc(name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${esc(email)}" style="color:#36B54A;">${esc(email)}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;vertical-align:top;">Phone</td>
              <td style="padding:10px 0;color:#111827;">${esc(phone)}</td>
            </tr>` : ""}
            ${service ? `<tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;vertical-align:top;">Service</td>
              <td style="padding:10px 0;color:#111827;">${esc(service)}</td>
            </tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <p style="color:#6b7280;font-size:13px;margin:0 0 8px;">Message</p>
          <p style="color:#111827;white-space:pre-line;margin:0;">${esc(message)}</p>
        </div>
        <div style="background:#284F70;padding:16px 32px;">
          <p style="color:#6b7280;font-size:12px;margin:0;">
            Sent from the contact form at www.mnsai.com — Reply to this email to respond to ${esc(name)}.
          </p>
        </div>
      </div>
    `,
  };

  // Auto-reply to the enquirer
  const autoReply = {
    from: `"MNSAI" <${SENDER}>`,
    to: email,
    subject: "We've received your message — MNSAI",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#284F70;padding:24px 32px;">
          <h1 style="color:#36B54A;font-size:20px;margin:0;">MNSAI (SMC-Private) Limited</h1>
        </div>
        <div style="background:#f9fafb;padding:32px;border:1px solid #e5e7eb;">
          <p style="color:#111827;margin:0 0 16px;">Dear ${esc(name)},</p>
          <p style="color:#374151;margin:0 0 16px;">
            Thank you for reaching out to <strong>MNSAI (SMC-Private) Limited</strong>.
            We have received your enquiry and our team will get back to you within
            <strong>48 hours</strong>.
          </p>
          <p style="color:#374151;margin:0 0 8px;">For urgent matters, please contact us directly:</p>
          <table style="border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:4px 16px 4px 0;color:#6b7280;font-size:13px;">Phone</td>
              <td><a href="tel:+923324452894" style="color:#36B54A;">+92-332-4452894</a></td>
            </tr>
            <tr>
              <td style="padding:4px 16px 4px 0;color:#6b7280;font-size:13px;">Email</td>
              <td><a href="mailto:ceo@mnsai.com" style="color:#36B54A;">ceo@mnsai.com</a></td>
            </tr>
          </table>
          <p style="color:#374151;margin:0;">
            Best regards,<br/>
            <strong>MNSAI (SMC-Private) Limited</strong><br/>
            <span style="color:#6b7280;font-size:13px;">
              Office No. 7, First Floor, Al-Rehman Arcade, PIA Road, Johar Town, Lahore
            </span>
          </p>
        </div>
        <div style="background:#284F70;padding:16px 32px;">
          <p style="color:#6b7280;font-size:12px;margin:0;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(internalMail),
      transporter.sendMail(autoReply),
    ]);
  } catch (err) {
    console.error("Mail send error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please email us directly at ceo@mnsai.com." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
