// GET: Get a post by id
// PUT: Update a post
// DELETE: Delete a post

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;

   const getPost = await prisma.post.findUnique({
      where: {
         id: id,
      },
   });

   return NextResponse.json(getPost);
}

export async function DELETE(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;

   const deletePost = await prisma.post.delete({
      where: {
         id: id,
      },
   });

   return NextResponse.json({
      message: "Post deleted successfully!",
      id: deletePost.id,
   });
}

// TODO: Figure this out
// export async function PUT(
//    req: NextRequest,
//    { params }: { params: { id: string } }
// ) {
//    const id = params.id;
//    const updatePostData = req.json();

//    const updatePost = await prisma.post.update({
//       where: {
//          id: id,
//       },
//       data: updatePostData,
//    });

//    return NextResponse.json({
//       message: "Post updated successfully!",
//       id: updatePost.id,
//    });
// }
