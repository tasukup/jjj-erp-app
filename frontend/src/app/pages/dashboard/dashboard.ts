import { Component, OnDestroy } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DashboardService } from '../../services/dashboard';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [DecimalPipe],
})
export class DashboardComponent implements OnDestroy {

  todayJournal = 0;
  pendingJournal = 0;
  todaySales = 0;
  monthSales = 0;
  lastMonthRate = 0;
  cashIn = 0;
  cashOut = 0;
  cashBalance = 0;

  private refreshSub?: Subscription; // ★追加

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    // 初回読み込み
    this.loadDashboard();

    // ★ 60秒ごとに自動更新
    this.refreshSub = interval(60000).subscribe(() => {
      this.loadDashboard();
    });
  }

  ngOnDestroy() {
    // ★ コンポーネント破棄時にタイマー解除（メモリリーク防止）
    this.refreshSub?.unsubscribe();
  }

  // 実際の API 呼び出し処理を関数にまとめる
  private loadDashboard() {
    this.dashboardService.getDashboard()
      .subscribe((data: any) => {
        this.todayJournal = data.todayJournal ?? 0;
        this.pendingJournal = data.pendingJournal ?? 0;
        this.todaySales = data.todaySales ?? 0;
        this.monthSales = data.monthSales ?? 0;
        this.lastMonthRate = data.lastMonthRate ?? 0;
        this.cashIn = data.cashIn ?? 0;
        this.cashOut = data.cashOut ?? 0;
        this.cashBalance = data.cashBalance ?? 0;
      });
  }
}
