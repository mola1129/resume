// Badge styles
export const BADGE_STYLES = {
  BASE: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-50 transition-colors",
} as const;

// Timeline styles
export const TIMELINE_STYLES = {
  DOT: {
    BASE: "absolute left-0 top-[8px] w-2.5 h-2.5 rounded-full ring-4 ring-white",
    ONGOING: "bg-blue-500",
    COMPLETED: "bg-slate-900",
  },
  LINE: "absolute left-[5px] top-[8px] bottom-0 w-px bg-slate-300",
} as const;
