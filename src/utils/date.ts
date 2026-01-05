/**
 * 期間文字列から年数と月数を計算する
 * @param period - "YYYY/MM - YYYY/MM" または "YYYY/MM - 現在" 形式の文字列
 * @returns "(X年Yヶ月)" 形式の文字列、または空文字列
 */
export function calculateDuration(period: string): string {
  const parts = period.split(" - ");
  if (parts.length !== 2) return "";

  const parseDate = (dateStr: string): Date => {
    if (dateStr === "現在") {
      return new Date();
    }
    const [year, month] = dateStr.split("/").map(Number);
    return new Date(year, month - 1);
  };

  const startDate = parseDate(parts[0]);
  const endDate = parseDate(parts[1]);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const result = [];
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
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
