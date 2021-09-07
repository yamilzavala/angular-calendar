import { Component, OnInit } from '@angular/core';
import {
  format,
  startOfMonth,
  subMonths,
  getDaysInMonth,
  endOfMonth,
  getDay,
  addMonths,
} from 'date-fns';

// declare function parseDate(date: any, timeZone: any): void;
const {parseDate} = require('../utils/internationalization.js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // N = 30;
  // days = Array.from({length: this.N}, (_, index) => index + 1);
  //monthSelect: FormatDateI = {name: '', value: 0, indexWeek: 0};
  monthSelect: any[] = [];
  dateSelect: any;
  currentDaySelected: string = '';
  currentTimeZoneSelected: string = '';

  ngOnInit() {
    this.getDateFromDate();
  }

  getDateFromDate(year: number = 2021, month: number = 9, day: number = 1) {
    const buildDate = new Date(year, month - 1, day);
    const startDate = startOfMonth(buildDate);
    const endDate = endOfMonth(buildDate);
    const daysInMonth = getDaysInMonth(buildDate);
    this.dateSelect = startDate;

    const arrayDays = Object.keys([...Array(daysInMonth)]).map((day) => {
      const currentDay = +day + 1;
      const date = new Date(`${year}, ${month}, ${currentDay}`);

      return {
        name: format(date, 'eee'),
        value: currentDay,
        indexWeek: getDay(date),
      };
    });

    this.monthSelect = arrayDays;
    console.log(this.monthSelect);
  }

  changeMonth(direction: number) {   
    if (direction < 0) {        
      const prevDate = subMonths(this.dateSelect, direction+2);
      this.getDateFromDate(+format(prevDate, 'yyyy'), +format (prevDate, 'MM'), +format (prevDate, 'dd'));
    } else {      
      const nextDate = addMonths(this.dateSelect, direction);
      this.getDateFromDate(+format(nextDate, 'yyyy'), +format (nextDate, 'MM'), +format (nextDate, 'dd'));
    }
  }

  getSelectedDay(day: any) {
    this.currentDaySelected = format(this.dateSelect, 'yyyy-MM').concat('-',day.value);         
  }

  getTimeZone(timeZone: string) {
    this.currentTimeZoneSelected = timeZone.concat(': ',parseDate(new Date(), timeZone));
  }


}

export interface FormatDateI {
  name: string;
  value: number;
  indexWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}
