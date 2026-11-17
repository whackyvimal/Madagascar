import { motion } from "framer-motion";
import { Flame, HandHeart, Flower2, Sun, Feather, Anchor, ArrowRight } from "lucide-react";
import { useState } from "react";
import { KeepsakeDialog } from "./KeepsakeDialog";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SIGNATURE } from "./content";

type Pillar = {
  title: string;
  name: string;
  icon: typeof Sun;
  line: string;
  note: string[];
  quote?: string;
};

const pillars: Pillar[] = [
  {
    title: "Affection & Warmth",
    name: "The Warmth of Your Hands",
    icon: Flame,
    line: "I want to hold you close through every season of our life.",
    note: [
      "My love, I want to be the warmth you reach for on cold mornings and the arms you fall into at the end of long days.",
      "Every time I hold your hand I feel the whole of our journey in my palm — the young years, the hard years, the beautiful years.",
      "I promise you a lifetime of tenderness: forehead kisses, slow hugs, and the kind of closeness that needs no words at all.",
    ],
  },
  {
    title: "Empathy & Compassion",
    name: "Your Gentle Refuge",
    icon: HandHeart,
    line: "I will always feel alongside you, and carry what is too heavy for you.",
    note: [
      "When your heart is tired, I don't want to fix you — I want to sit beside you and feel it with you.",
      "Give me your burdens, Mayilu. Let me lighten them. On the heaviest of days, I will be the quiet place where you can rest.",
      "Your tears will never be too much for me, and your silence will never be lonely. I am here, always.",
    ],
  },
  {
    title: "Validation & Acceptance",
    name: "Every Version of You",
    icon: Flower2,
    line: "I love every version of who you are — without a single condition.",
    note: [
      "The laughing you, the angry you, the sleepy you, the strong you, the fragile you, the naughty you — I love every single one of them.",
      "Your feelings are never wrong to me. They are sacred, because they are yours.",
      "I don't love you in spite of anything. I love you in all of it — your whole soul, exactly as God made it.",
    ],
  },
  {
    title: "Joy & Appreciation",
    name: "The Light You Bring",
    icon: Sun,
    line: "Every day I thank God for the divine light you carry into my life.",
    note: [
      "You turn ordinary days into festivals. Your laughter is the sweetest sound our home has ever known.",
      "Thank you for every meal made with love (groundnut chutney), every prayer you whispered for me, every small way you make my life meaningful.",
      "I notice it all, my love — and I am grateful for you every single day.",
    ],
  },
  {
    title: "Vulnerability & Honesty",
    name: "A Heart Without Walls",
    icon: Feather,
    line: "I open my heart to you completely — no masks, no walls.",
    note: [
      "With you, I never have to pretend. You have seen me at my best, my worst, and at my silliest, and you stayed.",
      "So let me say it openly, without any pride:",
    ],
    quote: "I am your stupid ‘Madagascar’ most of the time — imperfect and clumsy, yet completely transparent and yours.",
  },
  {
    title: "Security & Reassurance",
    name: "Your Unwavering Anchor",
    icon: Anchor,
    line: "No matter what storms come, I am not going anywhere.",
    note: [
      "Life will bring its storms — I won't pretend it won't. But you will never face one alone.",
      "When you doubt it, come back to this page and read it again:",
    ],
    quote: "My love for you is like the Sun — constant, warm, and it never switches off.",
  },
];

export function SixPillars() {
  const [active, setActive] = useState<Pillar | null>(null);

  return (
    <section id="pillars" className="relative bg-muted/60 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Six sacred promises"
        title="The Six Pillars of My Love"
        intro="The temple of us stands on these. Open each one — every note is written for you alone."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1}>
            <motion.button
              type="button"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={() => setActive(p)}
              className="bg-card shadow-keepsake group flex h-full w-full flex-col rounded-2xl border border-border p-7 text-left transition-colors hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft text-terracotta transition-colors group-hover:bg-gold-soft">
                <p.icon className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <span className="mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{p.title}</span>
              <span className="mt-2 font-serif text-2xl font-medium leading-snug text-ink">{p.name}</span>
              <span className="mt-3 flex-1 font-serif text-lg italic leading-relaxed text-muted-foreground">“{p.line}”</span>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-terracotta">
                Read full note <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <KeepsakeDialog
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
        eyebrow={active?.title}
        title={active?.name ?? ""}
        signature={SIGNATURE}
      >
        {active?.note.map((n) => <p key={n}>{n}</p>)}
        {active?.quote && (
          <blockquote className="border-l-2 border-gold pl-5 text-2xl italic text-terracotta">“{active.quote}”</blockquote>
        )}
      </KeepsakeDialog>
    </section>
  );
}
