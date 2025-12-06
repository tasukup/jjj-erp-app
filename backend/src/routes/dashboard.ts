// backend/src/routes/dashboard.ts
import { Router } from 'express';
import { db } from '../db';

const router = Router();

// YYYY-MM-DD に整形
function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// 月初の日付を取得
function getMonthStart(date: Date): string {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  return formatDate(d);
}

router.get('/dashboard', async (req, res, next) => {
  try {
    const today = new Date();
    const todayStr = formatDate(today);
    const monthStart = getMonthStart(today);

    // ① 今日の仕訳数（journal_entries.date を使用）
    const todayJournalRow = await db('journal_entries')
      .where('date', todayStr)
      .count<{ count: string }>('id as count')
      .first();

    const todayJournal = Number(todayJournalRow?.count ?? 0);

    // ② 今日の売上合計（journal_entries × journal_details）
    const todaySalesRow = await db('journal_details as d')
      .join('journal_entries as e', 'e.id', 'd.entry_id')
      .where('e.date', todayStr)
      .sum<{ sum: string }>('d.credit as sum')
      .first();                         // ★ ここがポイント

    const todaySales = Number(todaySalesRow?.sum ?? 0);  // ★ [0] 不要

    // ③ 今月の売上合計（月初〜今日まで）
    const monthSalesRow = await db('journal_details as d')
      .join('journal_entries as e', 'e.id', 'd.entry_id')
      .whereBetween('e.date', [monthStart, todayStr])
      .sum<{ sum: string }>('d.credit as sum')
      .first();                         // ★ 同じく first()

    const monthSales = Number(monthSalesRow?.sum ?? 0);

    // ④ 簡易版の入出金・残高
    const cashIn = monthSales;
    const cashOut = Math.floor(monthSales * 0.4);
    const cashBalance = cashIn - cashOut;

    res.json({
      todayJournal,
      pendingJournal: 0, // status 列まだなので 0 固定
      todaySales,
      monthSales,
      lastMonthRate: 0,  // 前月比は 2周目で
      cashIn,
      cashOut,
      cashBalance,
    });
  } catch (err) {
    next(err);
  }
});

export default router;