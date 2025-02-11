import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
// import { getCurrentUser } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  try {
        const headersList = await headers();
         console.log("All headers:", Object.fromEntries(headersList.entries()));
        const authHeader = headersList.get("authorization");
        console.log("Auth header:", authHeader);
    
    //   const user = await getCurrentUser();
    //    console.log("Current user:", user);
      
    // if (!user) {
    //     return NextResponse.json({ error: "Unauthorized: login first" }, { status: 401 });
    // } 
    const body = await request.json();
    const { username, email, password } = body;

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
        email,
        password: hashedPassword,
      },
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
