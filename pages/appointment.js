import { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appt) => setAppointments([...appointments, appt]);

  return (
    <main>
      <h1>Book Appointment</h1>
      <AppointmentForm onAdd={addAppointment} />
      <ul>
        {appointments.map((a, idx) => (
          <li key={idx}>{a.date} - {a.name}: {a.reason}</li>
        ))}
      </ul>
    </main>
  );
}
