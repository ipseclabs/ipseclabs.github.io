import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  topic: "Project" | "Community" | "Other";
  message: string;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(
  data: unknown
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const body = data as Record<string, unknown>;

  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    return { valid: false, error: "Name is required and must be at least 2 characters." };
  }

  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
    return { valid: false, error: "A valid email address is required." };
  }

  if (!body.topic || !["Project", "Community", "Other"].includes(body.topic as string)) {
    return { valid: false, error: "Topic must be Project, Community, or Other." };
  }

  if (!body.message || typeof body.message !== "string" || body.message.trim().length < 10) {
    return { valid: false, error: "Message is required and must be at least 10 characters." };
  }

  return {
    valid: true,
    data: {
      name: (body.name as string).trim(),
      email: (body.email as string).trim(),
      topic: body.topic as ContactFormData["topic"],
      message: (body.message as string).trim(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = validateFormData(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { data } = result;

    // TODO: Replace with actual email provider (e.g., Resend, SendGrid, AWS SES)
    // For now, log the submission server-side.
    console.log("[Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      topic: data.topic,
      messageLength: data.message.length,
    });

    // NOTE: We intentionally do NOT claim the message was delivered.
    // The response indicates the submission was received and logged,
    // not that an email was sent.
    return NextResponse.json({
      success: true,
      message:
        "Your message has been logged server-side. Note: Automated email delivery is awaiting provider configuration; please use contact@ipseclabs.com for direct communication.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
