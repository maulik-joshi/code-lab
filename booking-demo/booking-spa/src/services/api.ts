import axios from "axios";
import type { Booking } from "../types/Booking";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function getBookings(): Promise<Booking[]> {
  const response = await api.get<Booking[]>("/api/appointments");
  return response.data;
}