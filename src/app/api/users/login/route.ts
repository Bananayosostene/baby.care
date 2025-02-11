// login 
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/password";
import { generateToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      const { email, password } = body;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      const isPasswordMatch = await comparePassword(password, user.password);

      if (!isPasswordMatch) {
        return NextResponse.json(
          { error: "Invalid password" },
          { status: 401 }
        );
      }
      // Generate token
      const token = generateToken({
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      });
         const response = NextResponse.json(
           {
             message: "Login successful",
             token,
           },
           { status: 200 }
        );
        //  response.cookies.set({
        //    name: "token",
        //    value: token,
        //    httpOnly: true,
        //    secure: process.env.NODE_ENV === "production",
        //    sameSite: "strict",
        //    maxAge: 24 * 60 * 60, 
        //  });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}