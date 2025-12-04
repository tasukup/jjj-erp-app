//src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// ★ 追加：dashboardルートを読み込む　2025/12/2
import dashboardRouter from './routes/dashboard';

const app = express();
app.use(cors());
app.use(express.json());


// ★ 追加：/api/dashboard を有効にする　2025/12/2追加
app.use('/api', dashboardRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", database: "connected" });
});

// ↓ ここに追加！
app.get("/api/time", (req, res) => {
  res.json({ now: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
