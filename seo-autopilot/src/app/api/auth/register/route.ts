import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Nome, email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const [existing] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existing) {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const [user] = await db
      .insert(users)
      .values({
        name,
        email,
        whatsapp: whatsapp || null,
        password: hashedPassword,
      })
      .returning({ id: users.id, email: users.email });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error: any) {
    console.error("[register] Erro:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
