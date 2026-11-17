import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { TempleDivider } from "./TempleDivider";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eyebrow?: string | undefined;
  title: string;
  children: ReactNode;
  signature?: string | undefined;
};

/** A letter-on-parchment modal used for full notes and "Open when" letters. */
export function KeepsakeDialog({ open, onOpenChange, eyebrow, title, children, signature }: Props) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-veil backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="paper-grain shadow-keepsake fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-gold/40 px-6 py-10 sm:px-12 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-4 duration-500">
          <div className="pointer-events-none absolute inset-3 rounded-xl border border-gold/25" />
          {eyebrow && (
            <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-terracotta">{eyebrow}</p>
          )}
          <DialogPrimitive.Title className="mt-3 text-center font-serif text-3xl font-medium italic leading-tight text-ink sm:text-4xl">
            {title}
          </DialogPrimitive.Title>
          <TempleDivider className="my-6" />
          <DialogPrimitive.Description asChild>
            <div className="space-y-4 font-serif text-lg leading-relaxed text-ink/90 sm:text-xl">{children}</div>
          </DialogPrimitive.Description>
          {signature && (
            <p className="mt-8 text-right font-serif text-xl italic text-terracotta">— {signature}</p>
          )}
          <DialogPrimitive.Close className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground transition-colors hover:bg-rose-soft hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
