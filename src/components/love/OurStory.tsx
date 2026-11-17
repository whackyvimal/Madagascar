import { AnimatePresence, motion } from "framer-motion";
import { Car, Fan, Gem, Gift, Heart, Mic, Sparkles, Sprout } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Memory = {
  id: string;
  chapter: string;
  title: string;
  teaser: string;
  icon: typeof Heart;
  body: ReactNode;
};

const memories: Memory[] = [
  {
    id: "forever",
    chapter: "Chapter I",
    title: "Where Forever Began",
    teaser: "Our life's first date, and our very first kiss in the car.",
    icon: Car,
    body: (
      <>
        <p>
          I still remember how confident I was, how I kept
          pretending to look at the road just so I could steal one more glance at you.
        </p>
        <p>
          Then came that quiet moment — the world outside the window going soft and blurry, your eyes
          meeting mine — and our very first kiss. Awesome and you bit my tongue, made it so memorable and absolutely perfect.
        </p>
        <p className="italic text-terracotta">
          That little car became a temple that day. Everything I am began right there, with you.
        </p>
      </>
    ),
  },
  {
    id: "sixteen",
    chapter: "Chapter II",
    title: "A Love Known Since 16",
    teaser: "We were so young, and somehow you already knew.",
    icon: Sprout,
    body: (
      <>
        <p>
          You liked me since you were sixteen, and I never walked out of your heart. We grew up,
          and from March 2020 — we loved through silly fights, long talks and dreams far bigger than our pockets.
        </p>
        <p>
          Since those young days my voice has always been yours: the voice that calls your name first in
          the morning, that sings to you when you are tired, that will whisper “I love you Mayilu” until my very
          last breath.
        </p>
        <p className="italic text-terracotta">
          Every day since then has only been a longer way of saying the same thing — it was always YOU.
        </p>
      </>
    ),
  },
];

const tokens = [
  { label: "The small fan", note: "for the warm afternoons", icon: Fan },
  { label: "The jhumkas", note: "to dance beside your smile", icon: Sparkles },
  { label: "The earring stand", note: "to keep your little treasures safe", icon: Gem },
  { label: "My voice", note: "every song, every call, every promise", icon: Mic },
];

function MemoryCard({ memory, index }: { memory: Memory; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = memory.icon;
  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        role="button"
        tabIndex={0}
        layout
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        aria-expanded={open}
        className="paper-grain shadow-keepsake group relative w-full cursor-pointer rounded-2xl border border-gold/30 p-7 text-left transition-colors hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-9"
      >
        <div className="pointer-events-none absolute inset-2 rounded-xl border border-gold/15" />
        <motion.div layout="position" className="flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background text-terracotta">
            <Icon className="h-6 w-6" strokeWidth={1.4} />
          </span>
          <div className="flex-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{memory.chapter}</p>
            <h3 className="mt-1 font-serif text-3xl font-medium text-ink">{memory.title}</h3>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">{memory.teaser}</p>
          </div>
        </motion.div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-4 border-t border-gold/25 pt-6 font-serif text-lg leading-relaxed text-ink/90">
                {memory.body}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p layout="position" className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-terracotta">
          <Heart className={`h-3.5 w-3.5 transition-transform ${open ? "scale-125 fill-terracotta" : "group-hover:scale-110"}`} />
          {open ? "Hold it close" : "Tap to relive"}
        </motion.p>
      </motion.div>
    </Reveal>
  );
}

function GiftsCard() {
  const [revealed, setRevealed] = useState(false);
  return (
    <Reveal delay={0.2} className="md:col-span-2">
      <div className="paper-grain shadow-keepsake relative overflow-hidden rounded-2xl border border-gold/30 p-7 sm:p-10">
        <div className="pointer-events-none absolute inset-2 rounded-xl border border-gold/15" />
        <div className="flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background text-terracotta">
            <Gift className="h-6 w-6" strokeWidth={1.4} />
          </span>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">Chapter III</p>
            <h3 className="mt-1 font-serif text-3xl font-medium text-ink">The Little Tokens &amp; The Greatest Gift</h3>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">
              Over the years, I have placed a few humble things in your hands…
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tokens.map((t, i) => (
            <motion.li
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
              className="rounded-xl border border-border bg-background/70 p-5 text-center"
            >
              <t.icon className="mx-auto h-6 w-6 text-gold" strokeWidth={1.3} />
              <p className="mt-3 font-serif text-xl text-ink">{t.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.button
                key="btn"
                type="button"
                onClick={() => setRevealed(true)}
                exit={{ opacity: 0, scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-terracotta/50 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-terracotta transition-colors hover:bg-terracotta hover:text-primary-foreground"
              >
                <Heart className="h-3.5 w-3.5" /> But the truth is…
              </motion.button>
            ) : (
              <motion.blockquote
                key="truth"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-2xl font-serif text-2xl font-light italic leading-snug text-ink sm:text-3xl"
              >
                “None of these gifts were ever enough, because{" "}
                <span className="text-gilded font-semibold not-italic">YOU</span> are the true gift from God, and
                nothing in this world can ever replace you.”
              </motion.blockquote>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export function OurStory() {
  return (
    <section id="story" className="relative px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Our Story"
        title="Cherished Keepsakes"
        intro="A few pages from the book of us — tap each one to step back into the moment."
      />
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
        {memories.map((m, i) => (
          <MemoryCard key={m.id} memory={m} index={i} />
        ))}
        <GiftsCard />
      </div>
    </section>
  );
}
