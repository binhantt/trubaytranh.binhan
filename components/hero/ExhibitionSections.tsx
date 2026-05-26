import { siteData } from "@/database/site-data";
import { Badge, Box, Flex, Text } from "@radix-ui/themes";

export function ExhibitionSections() {
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
          {siteData.exhibitions.map((item, index) => {
            const detailId = `art-detail-${index + 1}`;

            return (
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

                <a
                  aria-label={`Xem chi tiết tranh ${item.title}`}
                  className="exhibition-art"
                  href={`#${detailId}`}
                >
                  <span
                    className={`painting-scene ${item.sceneClass}`}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <span className="exhibition-art-line exhibition-art-line-top" aria-hidden="true" />
                  <span
                    className="exhibition-art-line exhibition-art-line-bottom"
                    aria-hidden="true"
                  />
                  <span className="exhibition-art-caption" aria-hidden="true">
                    {item.status}
                  </span>
                  <span className="exhibition-art-overlay">Xem chi tiết</span>
                </a>
              </article>
            );
          })}
        </div>

        {siteData.exhibitions.map((item, index) => {
          const detailId = `art-detail-${index + 1}`;

          return (
            <div className="art-detail-modal" id={detailId} key={detailId}>
              <a
                aria-label="Đóng chi tiết tranh"
                className="art-detail-backdrop"
                href="#exhibition-gallery"
              />
              <Box className="art-detail-dialog">
                <Flex className="art-detail-layout" gap="5">
                  <Box
                    aria-label={item.title}
                    className={`art-detail-image ${item.sceneClass}`}
                    role="img"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />

                  <Box className="art-detail-copy">
                    <Box className="art-detail-heading">
                      <Badge
                        className="art-detail-status"
                        color="violet"
                        highContrast
                        variant="surface"
                      >
                        {item.status}
                      </Badge>
                      <h3>{item.title}</h3>
                    </Box>

                    <Text as="p" className="art-detail-description">
                      {item.description}
                    </Text>

                    <Box className="art-detail-meta">
                      <Text as="p">
                        <span>Tác giả</span>
                        {item.author}
                      </Text>
                      <Text as="p">
                        <span>Năm</span>
                        {item.year}
                      </Text>
                      <Text as="p">
                        <span>Chất liệu</span>
                        {item.material}
                      </Text>
                    </Box>

                    <Flex className="art-detail-controls" gap="3">
                      <a className="art-detail-close" href="#exhibition-gallery">
                        Đóng
                      </a>
                      <a className="art-detail-action" href="#site-footer">
                        Đăng ký xem tranh
                      </a>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </div>
          );
        })}
      </div>
    </section>
  );
}
