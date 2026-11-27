const TOKYO_TIME_ZONE = "Asia/Tokyo";

interface YearMonth {
  year: number;
  month: number;
}

/**
 * 期間文字列から年数と月数を計算する。
 * 開始月と終了月を両方含む（例: "2024/01 - 2024/03" は 3ヶ月、同じ月は 1ヶ月）。
 * 「現在」は実行環境のローカルタイムゾーンではなく Asia/Tokyo の暦月で解釈する。
 * @param period - "YYYY/MM - YYYY/MM" または "YYYY/MM - 現在" 形式の文字列
 * @returns "(X年Yヶ月)" 形式の文字列。解釈できない、または終了が開始より前の場合は空文字列
 */
export function calculateDuration(period: string): string {
  const parts = period.split(" - ");
  if (parts.length !== 2) return "";

  const now = new Date();
  const start = parseYearMonth(parts[0] ?? "", now);
  const end = parseYearMonth(parts[1] ?? "", now);
  if (start === null || end === null) return "";

  // 両端の月を数えるので +1 する。
  const totalMonths =
    (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (totalMonths < 1) return "";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const result: string[] = [];
  if (years > 0) result.push(`${years.toString()}年`);
  if (months > 0) result.push(`${months.toString()}ヶ月`);

  return result.length > 0 ? `(${result.join("")})` : "";
}

/**
 * 指定された日付を日本語フォーマットで文字列に変換
 * @param date - フォーマットする日付（デフォルト: 現在日時）
 * @returns 日本語フォーマットされた日付文字列
 */
export function formatDateJapanese(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: TOKYO_TIME_ZONE,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function parseYearMonth(dateStr: string, now: Date): YearMonth | null {
  if (dateStr === "現在") {
    return getTokyoYearMonth(now);
  }

  const match = /^(\d{4})\/(\d{1,2})$/.exec(dateStr);
  if (match === null) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) return null;

  return { year, month };
}

function getTokyoYearMonth(date: Date): YearMonth {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TOKYO_TIME_ZONE,
    year: "numeric",
    month: "numeric",
  }).formatToParts(date);

  return {
    year: numberPart(parts, "year"),
    month: numberPart(parts, "month"),
  };
}

function numberPart(
  parts: Intl.DateTimeFormatPart[],
  type: "year" | "month",
): number {
  const value = parts.find((part) => part.type === type)?.value;
  if (value === undefined) {
    throw new Error(`Asia/Tokyo date is missing ${type}`);
  }
  return Number(value);
}
