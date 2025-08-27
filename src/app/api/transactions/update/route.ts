import { NextRequest } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();

  switch (body.transaction_status) {
    case "settlement":
    case "capture":
      await prisma.ticket.update({
        where: {
          id: body.order_id,
        },
        data: {
          status: "SUCCESS",
        },
      });
      return Response.json({ status: true });

    case "pending":
      return Response.json({ status: true });

    case "deny":
    case "cancel":
    case "expire":
    case "failure":
      await prisma.ticket.update({
        where: {
          id: body.order_id,
        },
        data: {
          status: "FAILED",
        },
      });
      return Response.json({ status: true });

    default:
      return new Response(
        JSON.stringify({ status: false, message: "Invalid transaction status" }),
        { status: 400 }
      );
  }
}
