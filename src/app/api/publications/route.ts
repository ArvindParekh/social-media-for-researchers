// GET: Get all publications
// POST: Create a publication

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest) {
   const publicationData = await req.json();

   const createPublication = await prisma.publication.create({
      data: publicationData,
   });

   return NextResponse.json({
      message: "Publication created successfully!",
      id: createPublication.id,
   });
}

export async function GET(req: NextRequest) {
   const allPublications = await prisma.publication.findMany();

   return NextResponse.json({ allPublications });
}
