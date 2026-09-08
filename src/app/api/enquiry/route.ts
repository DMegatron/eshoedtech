import { NextResponse } from "next/server";

/**
 * Enquiry intake endpoint.
 * Currently logs to the server console and returns success.
 * Wire this to email (Resend/SMTP) or a CRM when ready.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.phone) {
      return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
    }
    console.log("[enquiry]", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }
}
