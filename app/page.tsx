import { ExhibitionSections } from "@/components/hero/ExhibitionSections";
import { HeroArtwork } from "@/components/hero/HeroArtwork";
import { HeroContent } from "@/components/hero/HeroContent";
import { TopCommentedArtworks } from "@/components/hero/TopCommentedArtworks";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] text-[var(--color-white)]">
      <section className="showcase-shell relative h-screen w-screen overflow-hidden">
        <Navbar />

        <div className="relative z-10 flex h-full w-full items-center px-8 sm:px-16 lg:px-24">
          <HeroContent />
        </div>

        <HeroArtwork />
      </section>

      <TopCommentedArtworks />
      <ExhibitionSections />
      <Footer />
    </main>
  );
}
