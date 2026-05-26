"use client";

import { useEffect, useState } from "react";
import { Badge, Box, Flex, Text } from "@radix-ui/themes";

import { siteData } from "@/database/site-data";

export function ExhibitionSections() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeArtwork = activeIndex === null ? null : siteData.exhibitions[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeIndex]);

  return (
    <section className="exhibition-section px-6 py-20 sm:px-10 lg:px-24" id="exhibitions">
      <span className="exhibition-ambient exhibition-ambient-1" aria-hidden="true" />
      <span className="exhibition-ambient exhibition-ambient-2" aria-hidden="true" />

      <div className="exhibition-shell mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="section-heading exhibition-heading">
          <p>Triển lãm chọn lọc</p>
          <h2>Trưng bày tranh vẽ</h2>
          <div className="exhibition-heading-meta" aria-hidden="true">
            <span>03 phòng tranh</span>
            <span>2025-2026</span>
            <span>Digital gallery</span>
          </div>
        </div>

        <div className="exhibition-gallery flex flex-col gap-16" id="exhibition-gallery">
          {siteData.exhibitions.map((item, index) => (
            <article
              className={`exhibition-row ${index % 2 === 1 ? "is-reverse" : ""}`}
              key={item.title}
            >
              <div className="exhibition-copy">
                <span className="exhibition-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="exhibition-tags" aria-label="Thông tin tranh">
                  <span>{item.year}</span>
                  <span>{item.material}</span>
                </div>
              </div>

              <button
                aria-label={`Xem chi tiết tranh ${item.title}`}
                className="exhibition-art"
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span
                  className={`painting-scene ${item.sceneClass}`}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <span className="exhibition-art-line exhibition-art-line-top" aria-hidden="true" />
                <span className="exhibition-art-line exhibition-art-line-bottom" aria-hidden="true" />
                <span className="exhibition-art-caption" aria-hidden="true">
                  {item.status}
                </span>
                <span className="exhibition-art-overlay">Xem chi tiết</span>
              </button>
            </article>
          ))}
        </div>

        {activeArtwork && (
          <div className="art-detail-modal is-open" role="dialog" aria-modal="true">
            <button
              aria-label="Đóng chi tiết tranh"
              className="art-detail-backdrop"
              onClick={() => setActiveIndex(null)}
              type="button"
            />
            <Box className="art-detail-dialog">
              <Flex className="art-detail-layout" gap="5">
                <Box
                  aria-label={activeArtwork.title}
                  className={`art-detail-image ${activeArtwork.sceneClass}`}
                  role="img"
                  style={{ backgroundImage: `url(${activeArtwork.imageUrl})` }}
                />

                <Box className="art-detail-copy">
                  <Box className="art-detail-heading">
                    <Badge
                      className="art-detail-status"
                      color="violet"
                      highContrast
                      variant="surface"
                    >
                      {activeArtwork.status}
                    </Badge>
                    <h3>{activeArtwork.title}</h3>
                  </Box>

                  <Text as="p" className="art-detail-description">
                    {activeArtwork.description}
                  </Text>

                  <Box className="art-detail-meta">
                    <Text as="p">
                      <span>Tác giả</span>
                      {activeArtwork.author}
                    </Text>
                    <Text as="p">
                      <span>Năm</span>
                      {activeArtwork.year}
                    </Text>
                    <Text as="p">
                      <span>Chất liệu</span>
                      {activeArtwork.material}
                    </Text>
                  </Box>

                  <Flex className="art-detail-controls" gap="3">
                    <button
                      className="art-detail-close"
                      onClick={() => setActiveIndex(null)}
                      type="button"
                    >
                      Đóng
                    </button>
                    <a
                      className="art-detail-action"
                      href="#site-footer"
                      onClick={() => setActiveIndex(null)}
                    >
                      Đăng ký xem tranh
                    </a>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </div>
        )}
      </div>
    </section>
  );
}
