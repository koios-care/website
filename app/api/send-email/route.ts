import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_5h8CspTP_5jChYjfu5tvNmvaoVz13U9yu');

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Koios Website <onboarding@resend.dev>',
      to: ['dimiiako12@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 