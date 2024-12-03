import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener ejercicios" },
      { status: 500 }
    );
  }
}

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const ejercicio = await prisma.todo.create({
//       data: {
//        publicId: body.publicId,
//        nombre: body.nombre,
//        descripcion: body.descripcion,
//       },
//     });
//     return NextResponse.json(ejercicio, { status: 201 });
//   } catch (error: unknown) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Error al crear ejercicio" },
//       { status: 500 }
//     );
  // }
// }
