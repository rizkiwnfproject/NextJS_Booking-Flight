"use server";

import prisma from "../../../../../../lib/prisma";

export const getFlights = async () => {
  try {
    const flights = await prisma.flight.findMany({
      include: {
        plane: true,
        seat: true,
      },
    });

    return flights;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function getFlightById(id: string) {
  try {
    const data = await prisma.flight.findFirst({
      where: {
        id: id,
      },
      include: {
        seat: {
          orderBy: {
            seatNumber: "asc",
          },
        },
        plane: true,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
