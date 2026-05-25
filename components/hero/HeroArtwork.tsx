import Image from "next/image";

import { siteData } from "@/database/site-data";

export function HeroArtwork() {
  return (
    <div className="diamond-gallery" aria-label="Bộ sưu tập tranh nổi bật">
      {siteData.hero.artworks.map((artwork, index) => (
        <input
          className="hero-art-radio"
          defaultChecked={index === 0}
          id={`hero-art-choice-${index + 1}`}
          key={`choice-${artwork.title}`}
          name="hero-artwork"
          type="radio"
        />
      ))}

      <div className="hero-artwork-index" aria-hidden="true">
        <span>ART</span>
        <strong>01</strong>
      </div>

      {siteData.hero.artworks.map((artwork, index) => (
        <label
          aria-label={`Chọn tác phẩm ${artwork.title}`}
          className={`diamond diamond-${index + 1} artwork-${index + 1}`}
          htmlFor={`hero-art-choice-${index + 1}`}
          key={artwork.title}
        >
          <Image
            alt=""
            className="diamond-photo"
            height={720}
            sizes="(max-width: 760px) 14rem, 25rem"
            src={artwork.imageUrl}
            width={720}
          />
          <span className="diamond-label">{artwork.title}</span>
        </label>
      ))}
    </div>
  );
}
