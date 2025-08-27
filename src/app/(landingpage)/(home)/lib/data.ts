"use server";

import prisma from "../../../../../lib/prisma";

export const getCityFilter = async () => {
  try {
    const destinations = await prisma.flight.groupBy({
      by: ["destinationCity"],
      where: {
        depatureDate: { gt: new Date() },
      },
      _count: {
        destinationCity: true,
      },
    });
    const departures = await prisma.flight.groupBy({
      by: ["depatureCity"],
      where: {
        depatureDate: { gt: new Date() },
      },
      _count: {
        depatureCity: true,
      },
    });
    // Normalisasi hasil biar bentuknya konsisten
    const formattedDepartures = departures.map((d) => ({
      type: "depatureCity",
      city: d.depatureCity,
      count: d._count.depatureCity,
    }));

    const formattedDestinations = destinations.map((d) => ({
      type: "destinationCity",
      city: d.destinationCity,
      count: d._count.destinationCity,
    }));

    return [...formattedDepartures, ...formattedDestinations];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAirplaneFilter = async () => {
  try {
    const data = await prisma.airplane.findMany({
      where: {
        flight: {
          every: {
            id: undefined,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
