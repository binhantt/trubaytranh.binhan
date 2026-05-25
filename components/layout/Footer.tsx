import { Box, Flex, Heading, Text } from "@radix-ui/themes";

import { siteData } from "@/database/site-data";

export function Footer() {
  return (
    <footer className="site-footer px-6 py-16 sm:px-10 lg:px-24" id="site-footer">
      <Box className="mx-auto w-full max-w-6xl">
        <Flex className="site-footer-hero" gap="6" justify="between">
          <Box className="site-footer-brand">
            <Heading as="h2">{siteData.footer.brand}</Heading>
            <Text as="p">{siteData.footer.description}</Text>
          </Box>

          <Text as="p" className="site-footer-note">
            Bộ sưu tập được tuyển chọn cho người xem yêu tranh, nghệ sĩ trẻ và
            các không gian triển lãm đương đại.
          </Text>
        </Flex>

        <Box className="site-footer-info">
          <Box className="site-footer-item">
            <Text as="p">Điều hướng</Text>
            <Text as="span">{siteData.footer.links.join(" / ")}</Text>
          </Box>

          <Box className="site-footer-item">
            <Text as="p">Liên hệ</Text>
            <Text as="span">{siteData.footer.contact.email}</Text>
            <Text as="span">{siteData.footer.contact.phone}</Text>
          </Box>

          <Box className="site-footer-item">
            <Text as="p">Địa điểm</Text>
            <Text as="span">{siteData.footer.contact.address}</Text>
          </Box>
        </Box>

        <Flex align="center" className="site-footer-bottom" justify="between">
          <Text as="p">{siteData.footer.copyright}</Text>
          <Flex className="site-footer-mark" gap="2">
            <span />
            <Text as="p">Trưng bày nghệ thuật hiện đại</Text>
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
}
