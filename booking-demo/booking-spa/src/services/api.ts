import axios from "axios";
import type { Booking } from "../types/Booking";

const api = axios.create({
  baseURL: "http://localhost:5020", // your API port
});

export async function getBookings(): Promise<Booking[]> {
  const response = await api.get<Booking[]>("/api/bookings");
  return response.data;
}