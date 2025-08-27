import { NextRequest } from "next/server";
import React, { useMemo } from "react";
import prisma from "../../../../../lib/prisma";
import { makeId, SEAT_VALUES, SeatValuesType } from "@/lib/utils";
import useCheckoutData from "@/hooks/useCheckoutData";

const MIDTRANS_URL = process.env.NEXT_PUBLIC_MIDRANS_TRANSACTION_URL ?? "";
const MIDTRANS_AUTH_KEY = process.env.NEXT_PUBLIC_MIDTRANS_AUTH_KEY ?? "";

export async function POST(request: NextRequest) {

  const body = await request.json();
  
  try {
    const transaction = await prisma.ticket.create({
      data: {
        bookingDate: body.bookingDate,
        price: body.price,
        status: "PENDING",
        customerId: body.customerId,
        flightId: body.flightId,
        seatId: body.seatId,
        code: `TRX${makeId(7)}`,
      },
    });

    console.log(body);

    await prisma.flightSeat.update({
      where: {
        id: transaction.seatId,
      },
      data: {
        isBooked: true,
      },
    });

    // handle midtrans

    const parameter = {
      transaction_details: {
        order_id: transaction.id,
        gross_amount: body.price,
      },
      credit_card: {
        secure: true,
      },
      item_details: [
        {
          id: body.flightId,
          price: body.price,
          quantity: 1,
          name: `Tiket Pesawat ${body.depatureCityCode} - ${body.destinationCityCode}`,
        },
      ],
    };

    const resMidtrans = await fetch(MIDTRANS_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Basic ${MIDTRANS_AUTH_KEY}`,
      },
      body: JSON.stringify(parameter),
    });
    const midtrans = await resMidtrans.json();
    await prisma.ticket.update({
      where: {
        id: transaction.id,
      },
      data: {
        tokenMidtrans: midtrans.token,
      },
    });

    return Response.json({ midtrans, transaction_id: transaction.id });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
