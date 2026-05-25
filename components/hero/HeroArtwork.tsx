import { siteData } from "@/database/site-data";

export function HeroArtwork() {
  return (
    <div className="diamond-gallery" aria-label="Bộ sưu tập tranh nổi bật">
      {siteData.hero.artworks.map((artwork, index) => (
        <div className={`diamond diamond-${index + 1}`} key={artwork.title}>
          <div
            aria-label={`Tác phẩm nghệ thuật ${index + 1}: ${artwork.title}`}
            className={`diamond-image artwork-${index + 1}`}
            role="img"
            style={{ backgroundImage: `url(${artwork.imageUrl})` }}
          />
        </div>
      ))}
    </div>
  );
}
