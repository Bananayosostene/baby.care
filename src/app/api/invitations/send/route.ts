// invitations/send
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signupToken } from "@/lib/jwt";
import { sendInvitationEmail } from "@/utils/email";
import { checkAuth } from "@/lib/authCheck";

export async function POST(request: NextRequest) {
     try {
       const { auth, user, response } = await checkAuth();

       if (!auth || !user || user.role !== "admin") {
         return response;
       }
       const body = await request.json();
       const { email, role } = body;

       const existingUser = await prisma.user.findUnique({
         where: { email },
       });

       if (existingUser) {
         return NextResponse.json(
           { error: "User is already registered" },
           { status: 409 }
         );
       }
       const existingInvitation = await prisma.invitations.findUnique({
         where: { email },
       });
       
       if (existingInvitation && !existingInvitation.isUsed) {
         return NextResponse.json(
           { error: "Invitation already sent to this email" },
           { status: 400 }
         );
       }

       const token = signupToken({ email, role });

       const invitation = await prisma.invitations.create({
         data: {
           email,
           role,
           token,
           createdAt: new Date(),
           inviterId: user.id,
         },
       });         
         await sendInvitationEmail(email, token);

         return NextResponse.json(
             { token ,message: "Invitation sent successfully" },
             { status: 201 }
       );
     } catch (error) {
       console.error("Error sending invitation:", error);
       return NextResponse.json(
         { error: "Failed to send invitation" },
         { status: 500 }
       );
     }
}