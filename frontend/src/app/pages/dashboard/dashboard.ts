import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DashboardService } from '../../services/dashboard';  // ← 追加
import { TimeClockComponent } from '../../widgets/time-clock/time-clock'; // ← ★ これが必要！

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [DecimalPipe,TimeClockComponent]
})
export class DashboardComponent {

  todayJournal = 0;
  pendingJournal = 0;
  todaySales = 0;
  monthSales = 0;
  lastMonthRate = 0;
  cashIn = 0;
  cashOut = 0;
  cashBalance = 0;

  constructor(private dashboardService: DashboardService) {}  // ← サービスに注入

  ngOnInit() {

    this.dashboardService.getDashboard()
      .subscribe((data: any) => {

        this.todayJournal = data.todayJournal;
        this.pendingJournal = data.pendingJournal;
        this.todaySales = data.todaySales;
        this.monthSales = data.monthSales;
        this.lastMonthRate = data.lastMonthRate;
        this.cashIn = data.cashIn;
        this.cashOut = data.cashOut;
        this.cashBalance = data.cashBalance;

      });
  }
}
