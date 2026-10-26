import axios from "axios";
import type { Appointment, AppointmentCreateRequest } from "../types/Appointment";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function getAppointments(): Promise<Appointment[]> {
  const response = await api.get<Appointment[]>("/api/appointments");
  return response.data;
}

export async function createAppointment(appt: AppointmentCreateRequest) {
  const response = await api.post("/api/appointments", appt);
  return response.data;
}