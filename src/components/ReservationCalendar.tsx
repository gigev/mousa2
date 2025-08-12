'use client';

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reservation } from "@/data/cars";
import { format, isWithinInterval, parseISO } from "date-fns";

interface ReservationCalendarProps {
  reservations: Reservation[];
  carName: string;
}

const ReservationCalendar = ({ reservations, carName }: ReservationCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Convert reservation dates to Date objects for calendar
  const reservedDates = reservations.flatMap(reservation => {
    const start = parseISO(reservation.startDate);
    const end = parseISO(reservation.endDate);
    const dates: Date[] = [];
    
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return dates;
  });

  // Function to check if a date is reserved
  const isDateReserved = (date: Date) => {
    return reservedDates.some(reservedDate => 
      format(reservedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle className="font-display text-xl">Availability Calendar</CardTitle>
        <p className="text-sm text-muted-foreground">
          Check availability for {carName}
        </p>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={undefined}
          onSelect={() => {}} // No-op function to prevent date selection
          className="rounded-md border"
          disabled={(date) => true} // Disable all date selection
          modifiers={{
            reserved: (date) => isDateReserved(date),
          }}
          modifiersStyles={{
            reserved: { 
              backgroundColor: "hsl(var(--destructive))", 
              color: "hsl(var(--destructive-foreground))",
              fontWeight: "bold"
            }
          }}
        />
        
        
      </CardContent>
    </div>
  );
};

export default ReservationCalendar;
