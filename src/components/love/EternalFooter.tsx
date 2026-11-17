import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sun } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { TempleDivider } from "./TempleDivider";
import { SIGNATURE } from "./content";

type Burst = { id: number; hearts: { x: number; delay: number; size: number; rise: number }[] };

export function EternalFooter() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [hugs, setHugs] = useState(0);

  const sendHug = () => {
    const id = Date.now();
    const hearts = Array.from({ length: 16 }, () => ({
      x: (Math.random() - 0.5) * 320,
      delay: Math.random() * 0.5,
      size: 14 + Math.random() * 18,
      rise: 260 + Math.random() * 260,
    }));
    setBursts((b) => [...b, { id, hearts }]);
    setHugs((h) => h + 1);
    window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 3200);
  };

  return (
    <footer className="relative overflow-hidden px-6 pb-16 pt-28 text-center sm:pt-36">
      <div className="bg-sun pointer-events-none absolute left-1/2 top-10 h-130 w-130 -translate-x-1/2 opacity-60" />

      <Reveal className="relative mx-auto max-w-3xl">
        <Sun className="mx-auto h-10 w-10 text-gold" strokeWidth={1.2} />
        <blockquote className="mt-8 font-serif text-4xl font-light italic leading-tight sm:text-6xl">
          <span className="text-gilded">“My love for you is like the Sun, that never switches off.”</span>
        </blockquote>
        <TempleDivider className="my-10" />
        <p className="font-serif text-xl italic text-muted-foreground">Forever at your feet and by your side,</p>
        <p className="mt-2 font-serif text-4xl text-terracotta sm:text-5xl">{SIGNATURE}</p>

        <div className="relative mt-14 inline-block">
          <motion.button
            type="button"
            onClick={sendHug}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="shadow-glow relative inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Heart className="h-4 w-4 fill-current" /> Send a warm hug
          </motion.button>

          <AnimatePresence>
            {bursts.map((burst) => (
              <div key={burst.id} className="pointer-events-none absolute left-1/2 top-1/2" aria-hidden="true">
                <motion.span
                  initial={{ scale: 0, opacity: 0.9 }}
                  animate={{ scale: 6, opacity: 0 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="bg-sun absolute -left-16 -top-16 block h-32 w-32 rounded-full"
                />
                {burst.hearts.map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                    animate={{ x: h.x, y: -h.rise, opacity: [0, 1, 1, 0], scale: 1, rotate: h.x / 6 }}
                    transition={{ duration: 2.6, delay: h.delay, ease: "easeOut" }}
                    className="absolute -translate-x-1/2 text-terracotta"
                  >
                    <Heart style={{ width: h.size, height: h.size }} className={i % 3 === 0 ? "fill-gold text-gold" : "fill-rose text-terracotta"} />
                  </motion.span>
                ))}
              </div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-6 h-6 text-sm text-muted-foreground" aria-live="polite">
          {hugs > 0 && (hugs === 1 ? "One warm hug, sent with all my heart." : `${hugs} warm hugs and counting — I'll never run out.`)}
        </p>
      </Reveal>

      <p className="relative mt-20 text-xs uppercase tracking-[0.35em] text-muted-foreground/80">
        Made with devotion · for my everything
      </p>
    </footer>
  );
}
