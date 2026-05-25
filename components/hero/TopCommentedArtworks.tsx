"use client";

import { Badge, Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useState } from "react";

import { siteData } from "@/database/site-data";

function getMedalClass(rank: string) {
  if (rank === "Top 1") {
    return "is-gold";
  }

  if (rank === "Top 2") {
    return "is-silver";
  }

  if (rank === "Top 3") {
    return "is-bronze";
  }

  return "is-muted";
}

export function TopCommentedArtworks() {
  const [activeArtwork, setActiveArtwork] = useState<
    (typeof siteData.topCommentedArtworks)[number]
  >(siteData.topCommentedArtworks[0]);
  const medalClass = getMedalClass(activeArtwork.rank);

  return (
    <section className="top-commented-section px-6 sm:px-10 lg:px-24">
      <Flex className="mx-auto w-full max-w-6xl" direction="column" gap="5">
        <Box className="section-heading ranking-heading">
          <Text as="p">Được người xem bình luận nhiều nhất</Text>
          <Heading as="h2">Tranh nổi bật</Heading>
        </Box>

        <Box className="ranking-layout">
          <Card className="ranking-board" variant="surface">
            <Flex align="center" justify="between">
              <Text as="p" className="ranking-board-title">
                Bảng xếp hạng
              </Text>
              <Badge color="sky" variant="surface">
                Top 5
              </Badge>
            </Flex>

            <Flex className="ranking-list" direction="column" gap="2">
              {siteData.topCommentedArtworks.map((artwork, index) => (
                <Button
                  className={`ranking-item ${
                    activeArtwork.rank === artwork.rank ? "is-active" : ""
                  }`}
                  highContrast
                  key={artwork.rank}
                  onClick={() => setActiveArtwork(artwork)}
                  type="button"
                  variant="ghost"
                >
                  <span className={`ranking-number ${getMedalClass(artwork.rank)}`}>
                    {index + 1}
                  </span>
                  <span className="ranking-copy">
                    <strong>{artwork.title}</strong>
                    <small>{artwork.rank}</small>
                  </span>
                  <span className="ranking-comments">{artwork.comments}</span>
                </Button>
              ))}
            </Flex>
          </Card>

          <Card className="art-display-card" variant="surface">
            <Flex align="start" className="art-display-header" justify="between">
              <Box>
                <Badge color="sky" highContrast variant="surface">
                  {activeArtwork.rank}
                </Badge>
                <Heading as="h3">{activeArtwork.title}</Heading>
                <Text as="p">Tác giả: {activeArtwork.author}</Text>
              </Box>

              <span className={`display-cup ${medalClass}`} aria-hidden="true">
                <span className="display-cup-bowl" />
                <span className="display-cup-stem" />
                <span className="display-cup-base" />
              </span>
            </Flex>

            <Box className="art-frame-shell">
              <Box className="art-frame-3d">
                <Box
                  aria-label={activeArtwork.title}
                  className="art-frame-image"
                  role="img"
                  style={{ backgroundImage: `url(${activeArtwork.imageUrl})` }}
                />
              </Box>
            </Box>

            <Flex align="end" className="art-display-footer" justify="between">
              <Box>
                <Heading as="h3">{activeArtwork.title}</Heading>
                <Text as="p">{activeArtwork.description}</Text>
              </Box>
              <Badge color="sky" highContrast variant="surface">
                {activeArtwork.comments}
              </Badge>
            </Flex>
          </Card>
        </Box>
      </Flex>
    </section>
  );
}
