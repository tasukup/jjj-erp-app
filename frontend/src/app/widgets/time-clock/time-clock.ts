import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TimeService } from '../../services/time';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-clock.html',
  styleUrls: ['./time-clock.css'],
})
export class TimeClockComponent implements OnDestroy {

  serverTime: string = '取得中…';
  private timer: any;

  constructor(
    private timeService: TimeService,
    private cdr: ChangeDetectorRef,  // ★ 必須
  ) {}

  ngOnInit() {
    this.updateTime(); // まず1回更新

    // ★ 1秒ごとにサーバーへ問い合わせ
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    this.timeService.getServerTime().subscribe((data) => {
      this.serverTime = data.now;
      this.cdr.detectChanges();  // ★ Angular に画面更新を強制させる
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);  // ★ メモリリーク防止
    }
  }
}