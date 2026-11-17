import { cn } from "@/lib/utils";

/** Line-art divider inspired by a temple gopuram, kalasam and hanging bells. */
export function TempleDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 text-gold", className)} aria-hidden="true">
      <svg viewBox="0 0 120 12" className="h-3 w-24 sm:w-40" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 6h96" />
        <path d="M100 6l5-4 5 4-5 4z" />
        <circle cx="116" cy="6" r="1.6" fill="currentColor" />
        <path d="M40 6c4-4 8-4 12 0s8 4 12 0" opacity="0.6" />
      </svg>
      <svg viewBox="0 0 64 64" className="h-12 w-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
        {/* kalasam finial */}
        <path d="M32 3v4" />
        <circle cx="32" cy="9" r="2" />
        <path d="M28 14c0-2 1.8-3 4-3s4 1 4 3" />
        {/* gopuram tiers */}
        <path d="M27 14h10l2 6H25z" />
        <path d="M23 20h18l2 7H21z" />
        <path d="M19 27h26l2 8H17z" />
        <path d="M15 35h34l2 9H13z" />
        {/* entrance */}
        <path d="M28 44v-5a4 4 0 0 1 8 0v5" />
        {/* lotus base */}
        <path d="M10 48c6 0 10-4 22-4s16 4 22 4" />
        <path d="M18 48c2 5 8 8 14 8s12-3 14-8" />
        <path d="M32 56v5" />
        {/* bells */}
        <path d="M13 44v6" opacity="0.7" />
        <path d="M11 52a2 2 0 0 0 4 0z" opacity="0.7" />
        <path d="M51 44v6" opacity="0.7" />
        <path d="M49 52a2 2 0 0 0 4 0z" opacity="0.7" />
      </svg>
      <svg viewBox="0 0 120 12" className="h-3 w-24 -scale-x-100 sm:w-40" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 6h96" />
        <path d="M100 6l5-4 5 4-5 4z" />
        <circle cx="116" cy="6" r="1.6" fill="currentColor" />
        <path d="M40 6c4-4 8-4 12 0s8 4 12 0" opacity="0.6" />
      </svg>
    </div>
  );
}
