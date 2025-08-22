import { useState } from 'react';
import ReviewForm from '../components/ReviewForm';

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  const addReview = (rev) => setReviews([...reviews, rev]);

  return (
    <main>
      <h1>Patient Reviews</h1>
      <ReviewForm onAdd={addReview} />
      <ul>
        {reviews.map((r, idx) => (
          <li key={idx}><strong>{r.name}:</strong> {r.message}</li>
        ))}
      </ul>
    </main>
  );
}
