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
  displayTime: string = '取得中…';
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
      this.displayTime = this.formatTime(data.now);
      this.cdr.detectChanges();  // ★ Angular に画面更新を強制させる
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);  // ★ メモリリーク防止
    }
  }

  private formatTime(isoString: string): string {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return '取得中…';
    }
    const pad = (n: number) => n.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}/${month}/${day}/${hours}/${minutes}`;
  }
}
