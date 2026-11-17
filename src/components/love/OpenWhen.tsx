import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
import { KeepsakeDialog } from "./KeepsakeDialog";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SIGNATURE } from "./content";

type Letter = { when: string; title: string; body: string[] };

const letters: Letter[] = [
  {
    when: "your stupid ‘Madagascar’ does something silly",
    title: "Forgive your clumsy one",
    body: [
      "Okay, I know. I did it again, didn't I? Forgot something, said something foolish, or made a mess you now have to look at.",
      "Before you roll your eyes all the way to the back of your head — please remember that this silly man would cross oceans for you, even if he trips on the way to the boat.",
      "Be angry for five minutes. Then let me make you Hot Chocolate, hold your hand, and make you laugh again. I'll try to be better. I promise. (Mostly.)",
      "I may be your stupid Madagascar, but I am YOUR stupid Madagascar — completely and forever.",
    ],
  },
  {
    when: "you need reassurance",
    title: "Breathe, my love — I'm right here",
    body: [
      "If you are reading this, something is weighing on your heart. Come, sit with me for a moment, even if only through these words.",
      "Nothing you could ever do or feel will make me love you less. Not your doubts, not your tears, not your bad days.",
      "You are NOT too much. You are NOT alone. You are my Goddess, my Home, my whole World — Today, Tomorrow and every Tomorrow after that.",
      "My love for you is like the Sun. Even behind the clouds, it is still shining. It never switches off.",
    ],
  },
  {
    when: "you want to remember our first kiss",
    title: "That day in the car",
    body: [
      "Close your eyes for a second. Remember the hush inside that little car, the glow of sunlight, the sound of both our hearts racing.",
      "Remember how we both pretended to be calm, and how terribly we failed at it.",
      "And then — that awesome kiss. Strong, sweet, the tongue bite, and the most beautiful beginning I could ever have asked God for.",
      "I still feel it every time you look at me. Come here — let me remind you.",
    ],
  },
];

function Envelope({ letter, index, onOpen }: { letter: Letter; index: number; onOpen: () => void }) {
  return (
    <Reveal delay={index * 0.12}>
      <motion.button
        type="button"
        onClick={onOpen}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        animate="rest"
        className="group relative block aspect-10/9 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-xl"
        aria-label={`Open when ${letter.when}`}
      >
        {/* letter peeking out */}
        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: -34 } }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="paper-grain absolute inset-x-5 top-4 bottom-6 rounded-md border border-gold/30"
        >
          <div className="mx-auto mt-4 h-1 w-1/2 rounded-full bg-gold/40" />
          <div className="mx-auto mt-2 h-1 w-1/3 rounded-full bg-gold/30" />
        </motion.div>
        {/* envelope body */}
        <div className="shadow-keepsake absolute inset-0 top-[22%] flex flex-col items-center justify-end rounded-xl border border-rose bg-rose-soft px-5 pb-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-terracotta">Open when</p>
          <p className="mt-2 font-serif text-xl italic leading-snug text-ink sm:text-2xl">{letter.when}</p>
        </div>
        {/* flap */}
        <motion.div
          variants={{ rest: { rotateX: 0 }, hover: { rotateX: 180 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top", transformPerspective: 800 }}
          className="envelope-flap absolute inset-x-0 top-[22%] h-[30%] bg-rose"
        />
        {/* wax seal */}
        <motion.span
          variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.6 } }}
          className="shadow-glow absolute left-1/2 top-[47%] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta text-primary-foreground"
        >
          <Heart className="h-4 w-4 fill-current" />
        </motion.span>
      </motion.button>
    </Reveal>
  );
}

export function OpenWhen() {
  const [active, setActive] = useState<Letter | null>(null);
  return (
    <section id="open-when" className="relative px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="An emotional capsule"
        title="Open When…"
        intro="Little sealed letters for the moments you need me most. Choose the one your heart is asking for."
      />
      <div className="mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {letters.map((l, i) => (
          <Envelope key={l.when} letter={l} index={i} onOpen={() => setActive(l)} />
        ))}
      </div>

      <KeepsakeDialog
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
        eyebrow={active ? `Open when ${active.when}` : undefined}
        title={active?.title ?? ""}
        signature={SIGNATURE}
      >
        {active?.body.map((b) => <p key={b}>{b}</p>)}
      </KeepsakeDialog>
    </section>
  );
}
