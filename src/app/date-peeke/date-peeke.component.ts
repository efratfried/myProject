// date-peeke.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-peeke',
  templateUrl: './date-peeke.component.html',
  styleUrls: ['./date-peeke.component.css']
})
export class DatePeekeComponent {
  selected!: Date | null;

  constructor(private router: Router) {}

  onDateSelected(selectedDate: Date | null): void {
    this.selected = selectedDate;
    if (this.selected) {
      this.router.navigate(['/tasks'], { queryParams: { date: this.selected.toISOString() } });
    }
  }
}
