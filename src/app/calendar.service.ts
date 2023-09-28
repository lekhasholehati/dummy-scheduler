import { Injectable } from '@angular/core';
import { id } from 'date-fns/locale';
import { format } from 'date-fns';

@Injectable()
export class CalendarService {
  getMonth(month = new Date().getMonth()): Date[][] {
    const year = new Date().getFullYear();
    const firstDayOfTheMonth = new Date(year, month, 1).getDay();

    const totalColumns = 7;
    const totalRows = 6;
    let currentMonthCount = 0 - firstDayOfTheMonth;

    const daysMatrix = new Array(totalRows).fill([]).map(() => {
      return new Array(totalColumns).fill(null).map(() => {
        currentMonthCount++;
        return new Date(year, month, currentMonthCount);
      });
    });

    return daysMatrix;
  }

  isCurrentDate(date: Date): boolean {
    const currentDate = new Date();

    const isCurrentYear = date.getFullYear() === currentDate.getFullYear();
    const isCurrentMonth = date.getMonth() === currentDate.getMonth();
    const isCurrentDate = date.getDate() === currentDate.getDate();

    return isCurrentYear && isCurrentMonth && isCurrentDate;
  }

  isFirstDayOfMonth(date: Date): boolean {
    return date.getDate() === 1;
  }

  isSameMonth(date: Date): boolean {
    const currentDate = new Date();
    return date.getMonth() === currentDate.getMonth();
  }
}
