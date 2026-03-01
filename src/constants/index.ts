// Badge styles
export const BADGE_STYLES = {
  BASE: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors",
} as const;

// Timeline styles
export const TIMELINE_STYLES = {
  DOT: {
    BASE: "absolute left-0 top-[8px] w-2.5 h-2.5 rounded-full ring-4 ring-white dark:ring-slate-950",
    ONGOING: "bg-blue-500 dark:bg-blue-400",
    COMPLETED: "bg-slate-900 dark:bg-slate-100",
  },
  LINE: "absolute left-[5px] top-[8px] bottom-0 w-px bg-slate-300 dark:bg-slate-700",
} as const;
