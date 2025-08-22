import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { assertSlotAvailable } from '@/lib/booking';

// Schema for incoming booking requests
const AppointmentSchema = z.object({
  doctorId: z.string(),
  patientId: z.string(),
  start: z.string().datetime(),
  end: z.string().datetime(),
  reason: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = AppointmentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { doctorId, patientId, start, end, reason } = parsed.data;
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Fetch existing appointments for overlap check
  const existing = await prisma.appointment.findMany({
    where: { doctorId },
    select: { start: true, end: true },
  });

  try {
    assertSlotAvailable(
      existing.map((a) => ({ start: a.start, end: a.end })),
      { start: startDate, end: endDate }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 409 });
  }

  const appointment = await prisma.appointment.create({
    data: {
      doctorId,
      patientId,
      start: startDate,
      end: endDate,
      reason,
    },
  });

  return NextResponse.json(appointment, { status: 201 });
}
