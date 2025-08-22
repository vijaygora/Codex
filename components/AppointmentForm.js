import { useState } from 'react';

export default function AppointmentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onAdd({ name, date, reason });
    setName('');
    setDate('');
    setReason('');
  };

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Patient Name" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" required />
      <button type="submit">Book</button>
    </form>
  );
}
