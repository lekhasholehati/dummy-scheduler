import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dummy-scheduler';
  month!: Date[][];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.month = this.calendarService.getMonth();
  }

  isCurrentDate(date: Date): boolean {
    return this.calendarService.isCurrentDate(date);
  }

  isFirstDayOfMonth(date: Date): boolean {
    return this.calendarService.isFirstDayOfMonth(date);
  }

  isSameMonth(date: Date): boolean {
    return this.calendarService.isSameMonth(date);
  }

  onClickDate(date: Date): void {
    console.log('date', date);
  }
}
