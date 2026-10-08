import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL || 'your-registered-resend-email@gmail.com'],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend API Error:', error); // টার্মিনালে আসল এরর দেখাবে
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Server catch error:', error); // আসল এরর মেসেজ দেখতে
    return NextResponse.json(
      { error: error.message || 'Failed to send email.' },
      { status: 500 }
    );
  }
}