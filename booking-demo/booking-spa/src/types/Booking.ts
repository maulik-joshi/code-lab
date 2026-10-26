export interface Booking {
  id: string;
  customerName: string | null;
  startTime: string; // ISO date string
  endTime: string;   // ISO date string
}
