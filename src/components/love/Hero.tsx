import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import diya from "@/assets/diya-jasmine.jpg";
import { TempleDivider } from "./TempleDivider";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-20 text-center">
      <img
        src={diya}
        alt="A glowing brass lamp resting among jasmine and marigold petals"
        width={1600}
        height={1008}
        className="absolute inset-x-0 bottom-0 h-[42%] w-full object-cover object-[70%_70%] opacity-80 sm:h-[65%]"
      />
      <div className="bg-hero-fade absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-terracotta"
        >
          A love letter, for you alone
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
          <TempleDivider className="my-8" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl font-light leading-[1.15] text-ink sm:text-5xl md:text-6xl"
        >
          “You are my Goddess <span className="text-gilded font-medium italic">Andal</span>,{" "}
          <span className="text-gilded font-medium italic">Parvati</span>, and{" "}
          <span className="text-gilded font-medium italic">Valli</span> — my Family Goddess, my Life, my World,
          my Everything.”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          From the sixteen-year-old girl who wanted me to sing her a song, to the woman who is now my whole
          world — this little keepsake holds a love that has only grown deeper with every year.
        </motion.p>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/70 transition-colors hover:text-terracotta"
      >
        Turn the page
        <ChevronDown className="animate-scroll-cue h-5 w-5" />
      </a>
    </section>
  );
}
