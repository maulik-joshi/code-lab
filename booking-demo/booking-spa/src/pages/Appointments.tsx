import { useEffect, useState } from "react";
import { getBookings } from "../services/api";
import type { Booking } from "../types/Booking";

export default function Appointments() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    async function fetchBookings() {
      const data = await getBookings();
      setBookings(data);
    }
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {bookings.map((booking: Booking) => (
          <li key={booking.id}>{booking.customerName}</li>
        ))}
      </ul>
    </div>
  );
}