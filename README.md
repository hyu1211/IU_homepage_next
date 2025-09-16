# Inspire Up 公式ウェブサイト

このリポジトリは、Inspire Upの公式ウェブサイトのソースコードです。 [Next.js (App Router)](https://nextjs.org/docs/app) を使用して構築されています。

---

## 🚀 はじめに (Getting Started)

このプロジェクトをあなたのローカル環境でセットアップし、実行する手順は以下の通りです。

### 1. 必要なもの

* Node.js (v18.18.0 以上を推奨)
* npm, yarn, pnpm, または bun のいずれかのパッケージマネージャー

### 2. リポジトリのクローン

まず、このリポジトリをクローンして、プロジェクトディレクトリに移動します。

```bash
git clone [https://github.com/hyu1211/iu_homepage_next.git](https://github.com/hyu1211/iu_homepage_next.git)
cd iu_homepage_next

### 3. 依存関係のインストール
次に、プロジェクトに必要なライブラリをインストールします。お使いのパッケージマネージャーに合わせて、以下のいずれかのコマンドを実行してください。

Bash

npm install
# または
yarn install
# または
pnpm install
### 4. 開発サーバーの起動
インストールが完了したら、開発サーバーを起動します。

Bash

npm run dev
# または
yarn dev
# または
pnpm dev
ブラウザで http://localhost:3000 を開くと、ウェブサイトが表示されます。 app ディレクトリ内のファイルを編集すると、ページはリアルタイムで自動的に更新されます。

## ✨ 技術スタック (Technology Stack)
このウェブサイトは、以下のモダンな技術を使用して構築されています。

フレームワーク: Next.js 15 (App Router)

UIライブラリ: React 19

言語: TypeScript

スタイリング: CSS Modules

アイコン: React Icons

## 📁 ディレクトリ構成 (Directory Structure)
プロジェクトの主要なディレクトリとファイルは以下の通りです。

.
├── app/                  # 各ページのコンポーネントとルーティング設定
│   ├── about/            # 「私たちについて」ページ
│   ├── contact/          # 「お問い合わせ」ページ
│   ├── salesbot/         # 「Salesbot」紹介ページ
│   ├── services/         # 「事業内容」ページ
│   ├── globals.css       # グローバルに適用されるスタイル
│   ├── layout.tsx        # サイト全体の共通レイアウト
│   └── page.tsx          # トップページのメインコンポーネント
├── components/           # 複数のページで再利用する共通コンポーネント
│   ├── Header.tsx        # ヘッダー
│   └── Footer.tsx        # フッター
├── public/               # 画像やフォントなどの静的ファイル
├── next.config.ts        # Next.jsの挙動をカスタマイズする設定ファイル
├── package.json          # プロジェクトの情報と依存ライブラリのリスト
└── README.md             # このファイル
##🌐 デプロイ (Deployment)
このアプリケーションは、Next.jsの開発元であるVercelが提供するVercel Platformを利用して、非常に簡単にデプロイすることができます。

GitHubリポジトリを連携させるだけで、自動的にビルドとデプロイが行われます。

より詳細な手順については、Next.jsのデプロイに関する公式ドキュメントをご確認ください。

🔧 コードの改善提案
