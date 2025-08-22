# Doctor-Patient Portal

This project is a simplified starting point for a modern doctor–patient web application built with **Next.js 14**, **TypeScript** and **Prisma**.

## Features
- Landing page with calls to book appointments or leave reviews
- REST API endpoint for creating appointments with validation against overlapping or past slots
- Prisma schema modelling users, doctors, patients, appointments and reviews
- Booking utility helpers with unit tests using Vitest

## Getting Started

```bash
npm install
npm run dev
```

### Prisma

The project uses SQLite by default. To set up the database and generate the Prisma client:

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### Running Tests

```bash
npm test
```

## Notes
This repository contains only a subset of the full application described in the specification. Additional features such as authentication, dashboards and advanced UI have been omitted for brevity.

