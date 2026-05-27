import { Badge, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";

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
  return (
    <section className="top-commented-section px-6 sm:px-10 lg:px-24" id="gallery">
      <Flex className="mx-auto w-full max-w-6xl" direction="column" gap="5">
        <Box className="section-heading ranking-heading">
          <Text as="p">Được người xem bình luận nhiều nhất</Text>
          <Heading as="h2">Tranh nổi bật</Heading>
        </Box>

        <Box className="top-art-selector">
          {siteData.topCommentedArtworks.map((artwork, index) => (
            <input
              className="ranking-radio"
              defaultChecked={index === 0}
              id={`top-art-choice-${index + 1}`}
              key={artwork.rank}
              name="top-artwork"
              type="radio"
            />
          ))}

          <Box className="ranking-layout">
            <Card className="ranking-board" variant="surface">
              <Flex align="center" justify="between">
                <Text as="p" className="ranking-board-title">
                  Bảng xếp hạng
                </Text>
                <Badge color="cyan" variant="surface">
                  Top 5
                </Badge>
              </Flex>

              <Flex className="ranking-list" direction="column" gap="2">
                {siteData.topCommentedArtworks.map((artwork, index) => (
                  <label
                    className={`ranking-item ${getMedalClass(artwork.rank)}`}
                    htmlFor={`top-art-choice-${index + 1}`}
                    key={artwork.rank}
                  >
                    <span className={`ranking-number ${getMedalClass(artwork.rank)}`}>
                      {index + 1}
                    </span>
                    <span className="ranking-copy">
                      <strong>{artwork.title}</strong>
                      <small className={`ranking-rank ${getMedalClass(artwork.rank)}`}>
                        {artwork.rank}
                      </small>
                    </span>
                    <span className="ranking-comments">{artwork.comments}</span>
                  </label>
                ))}
              </Flex>
            </Card>

            <Box className="art-display-panels">
              {siteData.topCommentedArtworks.map((artwork, index) => {
                const medalClass = getMedalClass(artwork.rank);

                return (
                  <Card
                    className={`art-display-card art-display-card-${index + 1}`}
                    key={artwork.rank}
                    variant="surface"
                  >
                    <Flex align="start" className="art-display-header" justify="between">
                      <Box>
                        <Flex
                          align="center"
                          className={`featured-kicker ${medalClass}`}
                          gap="2"
                        >
                          <Badge className={`featured-rank-badge ${medalClass}`} variant="surface">
                            {artwork.rank}
                          </Badge>
                          <Text as="span">
                            {index === 0 ? "Được chú ý nhất" : "Được bình luận nhiều"}
                          </Text>
                        </Flex>
                        <Heading as="h3">{artwork.title}</Heading>
                        <Text as="p">Tác giả: {artwork.author}</Text>
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
                          aria-label={artwork.title}
                          className="art-frame-image"
                          role="img"
                          style={{ backgroundImage: `url(${artwork.imageUrl})` }}
                        />
                      </Box>
                    </Box>

                    <Flex align="end" className="art-display-footer" justify="between">
                      <Box>
                        <Heading as="h3">{artwork.title}</Heading>
                        <Text as="p">{artwork.description}</Text>
                      </Box>
                      <Badge color="cyan" highContrast variant="surface">
                        {artwork.comments}
                      </Badge>
                    </Flex>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Flex>
    </section>
  );
}
