import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Doctor-Patient Portal</h1>
      <nav>
        <ul>
          <li><Link href="/appointment">Book Appointment</Link></li>
          <li><Link href="/review">Leave Review</Link></li>
        </ul>
      </nav>
    </main>
  );
}
