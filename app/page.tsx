import { ExhibitionSections } from "@/components/hero/ExhibitionSections";
import { HeroArtwork } from "@/components/hero/HeroArtwork";
import { HeroContent } from "@/components/hero/HeroContent";
import { TopCommentedArtworks } from "@/components/hero/TopCommentedArtworks";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] text-[var(--color-white)]">
      <section className="showcase-shell relative h-screen w-screen overflow-hidden" id="home">
        <Navbar />

        <div className="hero-inner relative z-10 mx-auto grid h-full w-full max-w-7xl items-center">
          <HeroContent />
          <HeroArtwork />
        </div>
      </section>

      <TopCommentedArtworks />
      <ExhibitionSections />
      <Footer />
    </main>
  );
}
