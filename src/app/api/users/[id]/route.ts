// GET: Fetch user details by id
// PUT: Update user details
// DELETE: Delete a user

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;

   const findUser = await prisma.user.findUnique({
      where: {
         id: id,
      },
   });

   return NextResponse.json(findUser);
}

export async function DELETE(
   req: NextRequest,
   { params }: { params: { id: string } }
) {
   const id = params.id;

   const deleteUser = await prisma.user.delete({
      where: {
         id: id,
      },
   });

   return NextResponse.json({
      message: "User is deleted!",
      id: deleteUser.id,
   });
}

// TODO: Figure this out
// export async function PUT(
//    req: NextRequest,
//    {
//       params,
//    }: {
//       params: {
//          id: string;
//       };
//    }
// ){
//     const id = params.id;
//     const updateData = req.json()

//     const updateUser = await prisma.user.update({
//         where: {
//             id: id
//         },
//         data: {
//             updateData
//         }
//     })
// };

// * Important information
// ! This is an aleart
// ? This is a question to ponder over
