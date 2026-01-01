# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code) に対してガイダンスを提供します。

## プロジェクト概要

Astro 5、Vue 3、Tailwind CSS 4で構築された個人履歴書・ポートフォリオサイトです。技術スキルと経験を紹介し、`https://mola1129.dev`にデプロイされています。

## 開発コマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動（localhost:4321）
pnpm dev

# 本番用ビルド（./dist/に出力）
pnpm build

# ビルドしたサイトをローカルでプレビュー
pnpm preview

# Astro CLIコマンドの実行
pnpm astro check          # 型チェック
pnpm astro add <package>  # インテグレーションの追加
```

## アーキテクチャ

### 技術スタック
- **Framework**: Astro 5.16+（Islands architectureを採用した静的サイトジェネレーター）
- **UI Framework**: Vue 3.5+（`@astrojs/vue`経由でインタラクティブなコンポーネントに使用）
- **Styling**: Tailwind CSS 4.1+（Viteプラグイン使用、PostCSSではない）
- **Component Library**: shadcn-vueコンポーネント（reka-uiベース）
- **Package Manager**: pnpm 10.11+

### プロジェクト構造

```
src/
├── data/           # データ定義（skills.tsなど、SkillCategory型を含む）
├── pages/          # Astroページ（ファイルベースルーティング）
├── layouts/        # ページレイアウト（Layout.astro）
├── components/
│   └── ui/         # shadcn-vue UIコンポーネント（Card、Badge、Button）
├── lib/            # ユーティリティ（クラス結合用のcnヘルパーなど）
├── styles/         # グローバルCSS（Tailwindとテーマ変数）
└── assets/         # 静的アセット
```

### 主要な設定ファイル

- `astro.config.mjs`: サイトURLは`https://mola1129.dev`、ベースパスは`/`（ルート）
- `components.json`: shadcn-vueの設定（New Yorkスタイル、Slateベースカラー）
- `tsconfig.json`: パスエイリアス`@/*`は`./src/*`にマッピング
- `.github/workflows/deploy.yml`: `main`ブランチへのpush時に自動デプロイ

### コンポーネントアーキテクチャ

**Astro Pages** ([src/pages/index.astro](src/pages/index.astro)):
- 静的コンテンツとページ構造には`.astro`ファイルを使用
- Vueコンポーネントは通常のインポート文で使用可能。Astroが自動的に静的レンダリングとクライアントサイドハイドレーションを適切に処理する
- インタラクティブ性が必要で明示的にクライアントサイドで実行したい場合のみ`client:*`ディレクティブを使用（例: `client:load`, `client:visible`）
- データは`src/data/`のTypeScriptファイルから取得

**Vue Components** ([src/components/ui/](src/components/ui/)):
- `src/components/ui/`に配置（shadcn-vueコンポーネント）
- Composition APIを使用したVue 3 SFCとして記述
- 条件付きスタイリングには`@/lib/utils`の`cn()`ユーティリティを使用
- カスタムCSS変数を使用したTailwindクラスでスタイリング

**スタイリングシステム**:
- Tailwind CSS 4をViteプラグイン経由で使用（PostCSSではない）
- [src/styles/global.css](src/styles/global.css)で`@theme inline`を使用したカスタムテーマ
- `.dark`クラスバリアントでダークモードを実装
- テーマ用にCSS custom properties を使用（例: `--color-background`）

### データレイヤー

スキルやコンテンツは`src/data/`のTypeScriptファイルで定義されています:
- 型付きインターフェースをエクスポート（例: `Skill`、`SkillCategory`）
- Astroコンポーネントで直接インポートして使用
- 現在は`skillicons.dev`の外部アイコンを使用してスキルを表示

## デプロイメント

- **デプロイ先**: GitHub Pages
- **トリガー**: `main`ブランチへのpush時に自動実行
- **アクション**: ビルドに公式の`withastro/action@v5`、デプロイに`actions/deploy-pages@v4`を使用
- **Node version**: 22

デプロイメントを変更する際の注意点:
- ベースパスは`/`（ルート）に設定（astro.config.mjsで設定）
- サイトは`./dist/`ディレクトリにビルドされる
- `dist/`ディレクトリはコミットしない（.gitignoreに記載）

## 開発ガイドライン

### 新しいshadcn-vueコンポーネントの追加

shadcn-vueコンポーネントを追加する場合は、`src/components/ui/`に配置し、既存のパターンに従ってください。`components.json`の設定でエイリアスが自動的に処理されます。

### TypeScriptパスエイリアス

インポートには`@/`プレフィックスを使用してください:
```typescript
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { skills } from '@/data/skills'
```

### Tailwind CSS 4に関する考慮事項

このプロジェクトはViteプラグインでTailwind CSS 4を使用しています。v3との主な違い:
- 設定は`tailwind.config.js`ではなく、CSSで`@theme`ディレクティブを使用
- ダークモードはglobal.cssで`@custom-variant dark`を使用
- PostCSS設定は不要
- グラデーション背景は`bg-linear-to-*`を使用（v3の`bg-gradient-to-*`ではない）
