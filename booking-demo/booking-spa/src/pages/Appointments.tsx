import { useEffect, useState } from "react";
import { getAppointments, createAppointment } from "../services/api";
import type { Appointment } from "../types/Appointment";

export default function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [customerName, setCustomerName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!customerName.trim()) {
      setError("Customer name is required");
      return;
    }

    const newAppt = {
      customerName,
      startTime: new Date(startTime).toISOString().slice(0, 19),
      endTime: new Date(endTime).toISOString().slice(0, 19)
    };
    
    const created = await createAppointment(newAppt);
    setAppointments(prev => [...prev, created]);
  }

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setAppointments(await getAppointments());
      } catch {
        setError("Failed to load appointments.");
      }
    }
    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      {error && <p>{error}</p>}
      <ul>
        {appointments.map((appt: Appointment) => (
          <li key={appt.id}>{appt.customerName}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          placeholder="Customer name"
        />

        <input
          type="datetime-local"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />

        <input
          type="datetime-local"
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
This keeps the page 
    </div>
  );
}