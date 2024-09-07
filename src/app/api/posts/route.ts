// GET: Get all posts
// POST: Create a new post

import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
   const allPosts = await prisma.post.findMany();

   return NextResponse.json(allPosts);
}

export async function POST(req: NextRequest) {
   const postData = await req.json();

   const createPost = await prisma.post.create({
      data: postData,
   });

   return NextResponse.json({
      message: "Post created successfully!",
      id: createPost.id,
   });
}
