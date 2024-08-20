// Handles CRUD operations for all users

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest) {
   const { email, password, name, bio, profileImage, institution, position } =
      await req.json();

   console.log(email, password, name, bio);

   try {
      const user = await prisma.user.create({
         data: {
            email,
            password,
            name,
            bio,
            profileImage,
            institution,
            position,
         },
      });

      console.log(user.id);

      return NextResponse.json({ message: "User created successfully!" });
   } catch (error) {
      //   console.log("Error creating user: ", error);
      return NextResponse.json({
         message: "Error creating User!",
         error: error,
      });
   }
}
