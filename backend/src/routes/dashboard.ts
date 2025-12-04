// src/routes/dashboard.ts
import { Router } from 'express';
const router = Router();

// ダッシュボード用ダミーデータ
router.get('/dashboard', (req, res) => {
  res.json({
    todayJournal: 18,
    pendingJournal: 3,
    todaySales: 482000,
    monthSales: 3120000,
    lastMonthRate: 12.4,
    cashIn: 980000,
    cashOut: 430000,
    cashBalance: 2350000,
  });
});

export default router;
