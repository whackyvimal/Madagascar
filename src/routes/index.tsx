import { createFileRoute } from "@tanstack/react-router";
import { AmbientParticles } from "@/components/love/AmbientParticles";
import { EternalFooter } from "@/components/love/EternalFooter";
import { Hero } from "@/components/love/Hero";
import { OpenWhen } from "@/components/love/OpenWhen";
import { OurStory } from "@/components/love/OurStory";
import { SixPillars } from "@/components/love/SixPillars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Goddess, My Everything — A Love Letter" },
      {
        name: "description",
        content: "A sacred digital love letter and keepsake from a husband to his wife — our story, six promises, and letters to open when you need me.",
      },
      { property: "og:title", content: "My Goddess, My Everything — A Love Letter" },
      {
        property: "og:description",
        content: "A love that has grown since sixteen — a keepsake of memories, promises and a love like the Sun.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <AmbientParticles />
      <div className="relative z-10">
        <Hero />
        <OurStory />
        <SixPillars />
        <OpenWhen />
        <EternalFooter />
      </div>
    </main>
  );
}
