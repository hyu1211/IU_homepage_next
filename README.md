README.md
Inspire Up 公式ウェブサイト
このリポジトリは、Inspire Upの公式ウェブサイトのソースコードです。Next.js (App Router) を使用して構築されています。

はじめに (Getting Started)
このプロジェクトをローカル環境でセットアップし、実行する手順は以下の通りです。

1. 必要なもの

Node.js (v18.18.0 以上)

npm, yarn, pnpm, または bun

2. リポジトリのクローン

Bash

git clone https://github.com/hyu1211/iu_homepage_next.git
cd iu_homepage_next
3. 依存関係のインストール

お使いのパッケージマネージャーに合わせて、以下のいずれかのコマンドを実行してください。

Bash

npm install
# または
yarn install
# または
pnpm install
4. 開発サーバーの起動

以下のコマンドを実行すると、開発サーバーが起動します。

Bash

npm run dev
# または
yarn dev
# または
pnpm dev
ブラウザで http://localhost:3000 を開くと、ウェブサイトが表示されます。 app ディレクトリ内のファイルを編集すると、ページは自動的に更新されます。

技術スタック (Technology Stack)
フレームワーク: Next.js 15

UIライブラリ: React 19

言語: TypeScript

スタイリング: CSS Modules, Tailwind CSS

アイコン: React Icons

ディレクトリ構成 (Directory Structure)
.
├── app/                  # 各ページのコンポーネントとスタイル
│   ├── about/            # 「私たちについて」ページ
│   ├── contact/          # 「お問い合わせ」ページ
│   ├── salesbot/         # 「Salesbot」紹介ページ
│   ├── services/         # 「事業内容」ページ
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # トップページ
├── components/           # 共通コンポーネント (Header, Footerなど)
├── public/               # 静的ファイル (画像など)
├── next.config.ts        # Next.jsの設定ファイル
├── package.json          # プロジェクトの依存関係とスクリプト
└── README.md             # このファイル
デプロイ (Deploy on Vercel)
このアプリケーションは、Next.js の制作者である Vercel が提供する Vercel Platform を利用して、簡単にデプロイできます。

詳細は、Next.js のデプロイに関するドキュメント をご確認ください。
