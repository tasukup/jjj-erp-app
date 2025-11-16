# jjj-erp-app
2025/11/16 created in king@dyna (Ubuntu)

統合基幹業務システム（ERP）開発プロジェクト  
TypeScript / Express / PostgreSQL / Knex を用いたクラウドERP基盤

---

# 🚀 プロジェクト概要

**jjj-erp-app** は、  
税理士事務所および中小企業を対象としたクラウドERPの自社開発プロジェクトです。

- 会計・仕訳の自動化
- AI による領収書読取（Document AI）
- Google Drive と連携したデータ取り込み
- クライアント企業ごとのデータ分離（1社1GCP環境）
- 電子帳簿保存法対応 / インボイス対応を想定

を中核として設計された **次世代型 ERP 基盤** です。

---

# 🎯 プロダクトビジョン

### 「税理士 × 企業 × Google Cloud」の最強のDXプラットフォームを作る

本システムは会計データの入力ではなく、  
**経営データの活用（データドリブン経営）を支援する** ことを最終目的としています。

- Google Document AI による領収書・請求書の自動解析  
- 自動仕訳候補生成（AI Result → CandidateEntry）
- BigQuery での経営分析
- Looker Studio ダッシュボード生成

税理士・記帳代行業務の効率化だけでなく、  
クライアント企業の経営改善にも貢献する統合基盤を目指しています。

---

# 🏗 技術スタック

| 分野 | 技術 |
|------|------|
| 言語 | TypeScript |
| ランタイム | Node.js |
| フレームワーク | Express |
| DB | PostgreSQL（当社のDB） |
| ORM/Query Builder | Knex |
| 認証 | JWT |
| 開発環境 | Ubuntu / VSCode Remote SSH |
| バージョン管理 | Git + GitHub |
| クラウド（予定） | Google Cloud Platform (GCP) |

---

# 📂 ディレクトリ構造
jjj-erp-app/
└── backend/
├── src/
│ └── server.ts
├── knexfile.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── .gitignore

将来的には以下の構造へ拡張予定：

jjj-erp-app/
├── backend/
├── frontend/
├── docs/
└── infra/

---

# 🛠 環境構築手順（新メンバー向け）

## 1. クローン
```bash

git clone https://github.com/tasukup/jjj-erp-app.git
cd jjj-erp-app/backend

2. 依存パッケージインストール
npm install

3. .env の作成
PORT=3000
DB_HOST=127.0.0.1
DB_USER=erpuser
DB_PASSWORD=***
DB_DATABASE=erp_db
DB_PORT=5432

JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1h

4. 開発サーバ起動
npm run dev

🗄 当社のDB（backend）について
backend ディレクトリは 当社のDB（コード） を扱う領域です。
当社スタッフ・販売代理店の管理（platform_users）
クライアント企業管理（firm / client）
クライアントの環境情報
契約プラン / モジュール選択
を保持します。
クライアント側の会計データは clientDB（後に別環境で構築）に保存します。

📘 今後の ERP モジュール計画（ロードマップ）
フェーズ1（MVP）
ユーザー認証（JWT）
企業管理（Firm / Client）
勘定科目マスター
仕訳入力（JournalEntry）
AI 仕訳候補（CandidateEntry）
仕訳確定ワークフロー

フェーズ2（商用版）
Document AI 連携
Google Drive 自動取り込み
銀行API連携
電子帳簿保存法 対応
請求書管理
売上・仕入管理

フェーズ3（高度化）
BigQuery連携
経営ダッシュボード（Looker Studio）
グローバル展開向けローカライズ

👥 開発ルール（複数人開発向け）
ブランチルール
main：本番に近い安定版
dev：開発統合ブランチ
feature/*：機能追加
fix/*：バグ修正
hotfix/*：緊急修正

コミットメッセージ（Conventional Commits）
feat: 新機能
fix: バグ修正
docs: ドキュメント更新
refactor: 機能変更なしの改善
style: コード整形

プルリクエスト（必須）
全メンバーがレビュー可能にするため、直接 main へ push するのは禁止。

📄 ライセンス
非公開。社内および契約企業に限定して利用。

📬 お問い合わせ
本プロジェクトは自社内で開発・運用される ERP プラットフォームです。
外部コラボレーションの際は別途ご連絡ください。

---

# ✔ 以上が README.md の完成版です！

必要であれば、以下も作成可能です：

- README 内の画像作成（ER図/構成図）
- docs/ ディレクトリの作成
- CONTRIBUTING.md（開発者ガイド）
- CODE_OF_CONDUCT.md（チーム制作用）

---
