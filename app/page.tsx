import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold">Find your doctor</h1>
      <p className="max-w-prose text-gray-600">
        Search specialists, book appointments and review your experiences.
      </p>
      <div className="flex gap-4">
        <Link
          href="/appointment"
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Book Appointment
        </Link>
        <Link
          href="/review"
          className="rounded border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-50"
        >
          Leave Review
        </Link>
      </div>
    </main>
  );
}
