# Visual Regression Tests - Technical Documentation

このディレクトリには、Playwrightを使用したビジュアルリグレッションテストが含まれています。

> **Note**: 基本的なセットアップ方法は [ルートのREADME](../README.md#-visual-regression-testing) を参照してください。

---

## 📋 テスト構成

### テストファイル

```
tests/
├── README.md                          # このファイル
├── visual-regression.spec.ts          # テストコード
└── visual-regression.spec.ts-snapshots/  # ベースライン画像
    ├── homepage-dark-Desktop-Chrome-linux.png
    ├── homepage-dark-Mobile-linux.png
    ├── homepage-dark-Tablet-linux.png
    ├── homepage-light-Desktop-Chrome-linux.png
    ├── homepage-light-Mobile-linux.png
    └── homepage-light-Tablet-linux.png
```

### テスト対象

現在のテストでは以下を検証しています:

**ビューポート:**
- Desktop Chrome (1920×1080)
- Tablet (768×1024)
- Mobile (Pixel 7: 412×839)

**テーマ:**
- ライトモード (`prefers-color-scheme: light`)
- ダークモード (`prefers-color-scheme: dark`)

**ページ:**
- ホームページ全体（フルページスクリーンショット）

**実行テスト数:** 2テーマ × 3ビューポート = **6テスト**

---

## 🔧 詳細設定

### playwright.config.ts の主要設定

```typescript
timeout: 60000,              // 各テスト60秒以内
expect: { timeout: 10000 },  // スクリーンショット比較10秒以内
fullyParallel: true,         // 並列実行（高速化）
retries: 2,                  // CI環境でのリトライ
```

### visual-regression.spec.ts のポイント

```typescript
// ✅ 正しい順序
await page.emulateMedia({ colorScheme: "light" });  // 1. テーマ設定
await page.goto("/");                                // 2. ページ読み込み

// ⚠️ 誤った順序（避けるべき）
await page.goto("/");                                // NG
await page.emulateMedia({ colorScheme: "light" });   // NG
```

**理由:** テーマ設定後にページを読み込むことで、CSS `prefers-color-scheme` が初回レンダリングから正しく適用されます。

### スクリーンショット比較設定

```typescript
await expect(page).toHaveScreenshot("homepage-light.png", {
  fullPage: true,              // ページ全体をキャプチャ
  animations: "disabled",      // アニメーション無効化（安定性向上）
  maxDiffPixelRatio: 0.01,     // 1%までの差分を許容
});
```

**maxDiffPixelRatio の意味:**
- `0.01` = 1% = 画像全体の1%までのピクセル差を許容
- 例: 1920×1080 (2,073,600px) の場合、20,736px まで許容
- **なぜ必要？** フォントレンダリングの環境差、外部画像の微妙な変化を吸収

---

## 🔄 テストのワークフロー

### 1. 初回セットアップ（ベースライン作成）

```bash
pnpm build
pnpm test:update
```

**生成されるもの:**
- `tests/visual-regression.spec.ts-snapshots/` に6枚の画像
- ファイル名例: `homepage-light-Desktop-Chrome-linux.png`

### 2. コード変更後のテスト

```bash
pnpm test
```

**Playwrightの処理:**
1. `pnpm preview` でサーバー自動起動
2. 各ビューポート・テーマでページを開く
3. スクリーンショット撮影
4. ベースライン画像とピクセル単位で比較
5. 差分があれば失敗

### 3. 差分確認

**テスト失敗時の出力:**
```
test-results/
└── visual-regression-Light-mode/
    ├── homepage-light-expected.png  # ベースライン
    ├── homepage-light-actual.png    # 現在の画像
    └── homepage-light-diff.png      # 差分（赤くハイライト）
```

**HTMLレポートで確認:**
```bash
pnpm test:report
```

### 4. 意図的な変更の場合

```bash
# スナップショットを更新
pnpm test:update

# コミット
git add tests/*-snapshots/
git commit -m "Update visual snapshots: new button design"
```

---

## 🤖 CI/CD での実行

### 自動実行タイミング

- Pull Request の作成・更新時
- `main` ブランチへの push 時
- 手動実行（workflow_dispatch）

### CI 実行フロー

```
1. Node.js 24 + pnpm 10 セットアップ
2. 依存関係インストール
3. Playwright ブラウザキャッシュ確認
4. ブラウザインストール（キャッシュなければ）
5. pnpm build（dist/ 作成）
6. pnpm test（VRT実行）
7. レポート・差分画像をアップロード（30日保存）
```

### パフォーマンス最適化

- **並列実行**: `fullyParallel: true` で高速化
- **ブラウザキャッシュ**: 2回目以降は150MBのダウンロードをスキップ
- **リトライ**: 一時的なネットワークエラーを吸収

**実行時間:**
- 初回: 5-7分（ブラウザダウンロード含む）
- 2回目以降: 1-2分（キャッシュ利用）

---

## 🔧 トラブルシューティング

### ❌ テストが失敗する

**エラー:** `Screenshot comparison failed`

**対処法:**

1. **差分を確認**
   ```bash
   pnpm test:report  # HTMLレポートで差分を確認
   ```

2. **意図的な変更の場合**
   ```bash
   pnpm test:update  # スナップショット更新
   git add tests/*-snapshots/
   git commit -m "Update snapshots: new design"
   ```

3. **バグの場合**
   - コードを修正して再テスト

---

### ❌ ブラウザがインストールできない

**エラー:** `Failed to download Chromium`

**対処法:**

**オプション1: 再試行**
```bash
pnpm exec playwright install chromium --with-deps
```

**オプション2: CI でのみ実行**
- ローカルではスキップし、GitHub Actions で実行

---

### ❌ テストがタイムアウトする

**エラー:** `Timeout exceeded`

**原因:** 外部リソースの読み込みが遅い

**対処:** すでに設定済み
```typescript
timeout: 60000,  // 60秒（通常は十分）
```

---

## 📚 参考リンク

- [Playwright 公式ドキュメント](https://playwright.dev/)
- [Visual Comparisons](https://playwright.dev/docs/test-snapshots)
- [CI Configuration](https://playwright.dev/docs/ci)

---

## 🎯 ベストプラクティス

### ✅ 推奨

- CI で必ずテスト実行
- 差分を目視確認してからスナップショット更新
- `maxDiffPixelRatio` で微妙な差を許容

### ❌ 非推奨

- 差分を確認せずにスナップショット更新
- タイムアウトを極端に短く設定
- 動的コンテンツをそのままテスト
