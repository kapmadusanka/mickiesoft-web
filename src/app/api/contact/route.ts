import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, recaptchaToken } = body;

    if (!name || !email || !subject || !message || !recaptchaToken) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Verify ReCaptcha
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecretKey) {
      const recaptchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
        {
          method: "POST",
        }
      );
      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success) {
        return NextResponse.json(
          { message: "Invalid ReCaptcha" },
          { status: 400 }
        );
      }
    } else {
      console.warn("RECAPTCHA_SECRET_KEY is not set. Skipping ReCaptcha verification.");
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Mickiesoft <info@welcomesrilanka.com>", // Replace with your verified domain
      to: ["shanuka@mickiesoft.lk"], // Replace with your email address to receive contacts
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ id: data?.id, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
