import { initTRPC, TRPCError } from "@trpc/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import superjson from "superjson";

export async function createTRPCContext() {
  const session = await auth();
  return { db, userId: session?.user?.id ?? null };
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { ...ctx, userId: ctx.userId } });
});
