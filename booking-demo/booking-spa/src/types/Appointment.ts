export interface Appointment {
  id: string;
  customerName: string | null;
  startTime: string; // ISO date string
  endTime: string;   // ISO date string
}

export type AppointmentCreateRequest = {
  customerName: string;
  startTime: string;
  endTime: string;
};