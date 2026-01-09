# Visual Regression Tests

このディレクトリには、Playwrightを使用したビジュアルリグレッションテストが含まれています。

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# Playwrightブラウザのインストール（初回のみ）
pnpm exec playwright install chromium --with-deps
```

## テストの実行

```bash
# ビジュアルリグレッションテストを実行
pnpm test

# UIモードでテストを実行（インタラクティブ）
pnpm test:ui

# ベースラインスナップショットを更新
pnpm test:update

# テストレポートを表示
pnpm test:report
```

## 初回セットアップ: ベースラインスナップショットの作成

初回テスト実行時は、ベースラインスナップショットを作成する必要があります:

```bash
# サイトをビルド
pnpm build

# スナップショットを作成
pnpm test:update
```

これにより、`tests/visual-regression.spec.ts-snapshots/` ディレクトリにスナップショット画像が保存されます。

## テストの仕組み

1. **ベースライン作成**: 最初に `pnpm test:update` でスナップショットを作成
2. **コード変更**: CSSやコンポーネントを変更
3. **テスト実行**: `pnpm test` で変更を検証
4. **差分確認**: 変更があれば、テストが失敗し、差分画像が生成される
5. **承認または修正**:
   - 意図的な変更の場合: `pnpm test:update` でスナップショットを更新
   - バグの場合: コードを修正して再テスト

## テスト対象

現在のテストでは以下を検証しています:

- **ビューポート**:
  - Desktop Chrome (1920x1080)
  - Tablet (768x1024)
  - Mobile (Pixel 5)

- **テーマ**:
  - ライトモード
  - ダークモード

- **ページ**:
  - ホームページ全体

## CI/CD

Visual Regression Testsは以下のタイミングで自動実行されます:

- Pull Requestの作成・更新時
- `main`ブランチへのpush時

テスト結果とレポートはGitHub Actionsのartifactsとしてアップロードされます。

## トラブルシューティング

### テストが失敗する

1. **意図的な変更の場合**:
   ```bash
   pnpm test:update
   git add tests/*-snapshots/
   git commit -m "Update visual regression snapshots"
   ```

2. **予期しない変更の場合**:
   - `test-results/` ディレクトリで差分画像を確認
   - コードを修正して再テスト

### ブラウザのインストールに失敗する

```bash
pnpm exec playwright install chromium --with-deps
```

それでも失敗する場合は、CI環境でのみテストを実行してください。
