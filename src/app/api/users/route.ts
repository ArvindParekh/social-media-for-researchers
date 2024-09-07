// POST - create a new user --- I think this'll be handled by nextauth
// GET - Fetch all users
import prisma from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
   const allUsers = await prisma.user.findMany();

   return NextResponse.json(allUsers);
}
