// GET: Get publication details
// PUT: Update a publication
// DELETE: Delete a publication

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;

   const getPublication = await prisma.publication.findUnique({
      where: {
         id: id,
      },
   });

   return NextResponse.json({ getPublication });
}

export async function PUT(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;
   const updatePublicationData = await req.json();

   const updatePublication = await prisma.publication.update({
      where: {
         id: id,
      },
      data: updatePublicationData,
   });

   return NextResponse.json({
      message: "Publication updated successfully!",
      id: updatePublication.id,
   });
}

export async function DELETE(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;

   const deletePublication = await prisma.publication.delete({
      where: {
         id: id,
      },
   });

   return NextResponse.json({
      message: "Publication deleted successfully!",
      id: deletePublication.id,
   });
}
