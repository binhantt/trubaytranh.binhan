"use client";

import { Badge, Box, Button, Dialog, Flex, Text } from "@radix-ui/themes";

import { siteData } from "@/database/site-data";

export function ExhibitionSections() {
  return (
    <section className="exhibition-section px-6 py-20 sm:px-10 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="section-heading">
          <p>Triển lãm chọn lọc</p>
          <h2>Trưng bày tranh vẽ</h2>
        </div>

        <div className="flex flex-col gap-16">
          {siteData.exhibitions.map((item, index) => (
            <article
              className={`exhibition-row ${index % 2 === 1 ? "is-reverse" : ""}`}
              key={item.title}
            >
              <div className="exhibition-copy">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <Dialog.Root>
                <Dialog.Trigger>
                  <button
                    aria-label={`Xem chi tiết tranh ${item.title}`}
                    className="exhibition-art"
                    type="button"
                  >
                    <span
                      className={`painting-scene ${item.sceneClass}`}
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    />
                    <span className="exhibition-art-overlay">Xem chi tiết</span>
                  </button>
                </Dialog.Trigger>

                <Dialog.Content className="art-detail-dialog" maxWidth="980px">
                  <Flex className="art-detail-layout" gap="5" style={{ flexDirection: index % 2 === 1 ? "row-reverse" : "row"  , padding: 0  }}>
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
                          color="sky"
                          highContrast
                          variant="surface"
                        >
                          {item.status}
                        </Badge>
                        <Dialog.Title>{item.title}</Dialog.Title>
                      </Box>

                      <Dialog.Description className="art-detail-description">
                        {item.description}
                      </Dialog.Description>

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
                        <Dialog.Close>
                          <Button highContrast variant="surface">
                            Đóng
                          </Button>
                        </Dialog.Close>
                        <Button className="art-detail-action" variant="outline">
                          Đăng ký xem tranh
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
