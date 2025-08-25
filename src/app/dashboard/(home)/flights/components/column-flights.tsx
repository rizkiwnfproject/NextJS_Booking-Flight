import type { Airplane, Flight, FlightSeat } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";

export type FlightColumn = Flight & {
    plane: Airplane,
    seats: FlightSeat[]
}

export const column : ColumnDef<>