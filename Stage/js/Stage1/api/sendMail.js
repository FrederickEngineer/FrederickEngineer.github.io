import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false });

  const { name, email, message, token } = req.body;

  // reCAPTCHA検証
  const verify = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    }
  ).then((r) => r.json());

  if (!verify.success || verify.score < 0.5) {
    return res
      .status(400)
      .json({ success: false, message: "reCAPTCHA verification failed" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"お問い合わせフォーム" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO,
      subject: "お問い合わせが届きました",
      text: `お名前: ${name}\nメール: ${email}\n内容:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "メール送信に失敗しました。" });
  }
}
