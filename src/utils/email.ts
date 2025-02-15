// utils/email.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export const sendInvitationEmail = async (email: string, token: string) => {
  const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/signup?token=${token}`;

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "Invitation to Join Our Platform",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>You've Been Invited!</h2>
        <p>Hello,</p>
        <p>You have been invited to join our platform. Please click the link below to create your account:</p>
        <p>
          <a href="${inviteLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Accept Invitation
          </a>
        </p>
        <p>This invitation link will expire in 24 hours.</p>
        <p>If you didn't expect this invitation, please ignore this email.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
