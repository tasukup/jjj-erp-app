import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef,
  ) {}  // サービス + 画面更新用

  ngOnInit() {

    this.dashboardService.getDashboard()
      .subscribe((data: any) => {
      console.log("📌 ダッシュボード受信データ:", data);  // ← 追加

        // サーバーから値が欠けたり文字列で返ってきても数字で表示できるようにする
        this.todayJournal = Number(data?.todayJournal ?? 0);
        this.pendingJournal = Number(data?.pendingJournal ?? 0);
        this.todaySales = Number(data?.todaySales ?? 0);
        this.monthSales = Number(data?.monthSales ?? 0);
        this.lastMonthRate = Number(data?.lastMonthRate ?? 0);
        this.cashIn = Number(data?.cashIn ?? 0);
        this.cashOut = Number(data?.cashOut ?? 0);
        this.cashBalance = Number(data?.cashBalance ?? 0);

        // まれに外部ゾーンで走る場合があるので明示的に検知させる
        this.cdr.detectChanges();
       
         console.log("📌 todaySales:", this.todaySales);  // ← 追加
      });
  }
}
