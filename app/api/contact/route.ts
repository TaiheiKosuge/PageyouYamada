import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // nodemailerの設定（Gmailの場合）
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'taiksg17@gmail.com', // 例: youraddress@gmail.com
      pass: 'xjox nekq qeqc tydz',      // Googleアカウントの「アプリパスワード」
    },
  });

  try {
    await transporter.sendMail({
      from: 'taiksg17@gmail.com',
      to: 'sinnkennhaiou@gmail.com', // ここに受信したいアドレス
      subject: 'お問い合わせフォームからのメッセージ',
      text: `お名前: ${name}\nメール: ${email}\n内容:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}