import { useState } from 'react';

export default function ReviewForm({ onAdd }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onAdd({ name, message });
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Patient Name" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Review" required />
      <button type="submit">Submit Review</button>
    </form>
  );
}
