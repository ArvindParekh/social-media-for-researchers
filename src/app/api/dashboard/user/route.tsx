import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest) {
   const session = await getServerSession(authOptions);
   console.log("session issss: ", session);

   const user = await prisma.user.findUnique({
      where: {
         //  id: session.user.id,
         email: session.user.email,
      },
      
   });

   return NextResponse.json({
      session: session,
      user: user,
   });
}
