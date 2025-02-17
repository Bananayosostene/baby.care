import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { checkAuth } from "@/lib/authCheck";

export async function POST(request: NextRequest) {
  try {
    const { auth, user, response } = await checkAuth();

    if (!auth || !user) {
      return response;
    }
    const body = await request.json();
    const { username, email, password, token } = body;

    const invitation = await prisma.invitations.findUnique({
      where: { token },
    });

    if (!invitation || invitation.isUsed) {
      return NextResponse.json(
        { error: "Invalid or expired invitation" },
        { status: 400 }
      );
    }
     if (invitation.email !== email) {
       return NextResponse.json(
         { error: "Email does not match invitation" },
         { status: 400 }
       );
     }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User is already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email: invitation.email,
        password: hashedPassword,
        role: invitation.role || "family",
      },
    });

    await prisma.invitations.update({
      where: { id: invitation.id },
      data: { isUsed: true },
    });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
