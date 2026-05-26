import { ExhibitionSections } from "@/components/hero/ExhibitionSections";
import { HeroArtwork } from "@/components/hero/HeroArtwork";
import { HeroContent } from "@/components/hero/HeroContent";
import { TopCommentedArtworks } from "@/components/hero/TopCommentedArtworks";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] text-[var(--color-white)]">
      <section className="showcase-shell relative h-screen w-full overflow-hidden" id="home">
        <Navbar />
        <span className="hero-decor hero-decor-line" aria-hidden="true" />
        <span className="hero-decor hero-decor-dot hero-decor-dot-1" aria-hidden="true" />
        <span className="hero-decor hero-decor-dot hero-decor-dot-2" aria-hidden="true" />
        <span className="hero-decor hero-decor-label" aria-hidden="true">
          Curated / 2026
        </span>

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
