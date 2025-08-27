import { NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";
import type { TypeSeat } from "@prisma/client";

export async function POST(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;

  // const params = {
  //   depature: searchParams.get("depature"),
  //   arrival: searchParams.get("arrival"),
  //   date: searchParams.get("date"),
  //   planeId: searchParams.get("planeId"),
  //   seat: searchParams.get("seat"),
  // };

  const body = await request.json();

  let depatureDate: Date | null = null;
  if (body.date) {
    depatureDate = new Date(body.date);
    depatureDate.setHours(1);
  }

  try {
    const data = await prisma.flight.findMany({
      where: {
        depatureCity: body.depature !== null ? body.depature : {},
        destinationCity: body.arrival !== null ? body.arrival : {},
        seat:
          body.seat !== null
            ? {
                some: {
                  type: body.seat as TypeSeat,
                  isBooked: false,
                },
              }
            : {},
        depatureDate:
          depatureDate !== null
            ? {
                gte: depatureDate,
              }
            : {},
        // planeId: body.planeId
        //   ? body.planeId.split(",").length > 0
        //     ? {
        //         in: [...body.planeId.split(",")],
        //       }
        //     : {}
        //   : {},
        planeId:
          body.planeIds.length > 0
            ? {
                in: body.planeIds,
              }
            : {},
      },
      include: {
        plane: true,
      },
    });

    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        error: true,
        error_message: "Failed To Get Data",
      },
      { status: 500 }
    );
  }
}
