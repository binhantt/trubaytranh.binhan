import { Badge, Button, Flex, Text } from "@radix-ui/themes";

import { siteData } from "@/database/site-data";

export function HeroContent() {
  const [firstLine, accentLine, lastLine] = siteData.hero.titleLines;

  return (
    <div className="hero-copy-block">
      <Badge className="hero-badge" color="cyan" highContrast variant="surface">
        {siteData.hero.badge}
      </Badge>

      <h1 className="hero-title">
        {firstLine}
        <br />
        <span className="accent-word">{accentLine}</span>
        <br />
        {lastLine}
      </h1>

      <p className="hero-description">{siteData.hero.description}</p>

      <Flex align="center" className="hero-actions" gap="3">
        <Button className="hero-action" highContrast size="3" variant="outline">
          {siteData.hero.actionLabel}
        </Button>
        <Text as="span" className="hero-note">
          03 chủ đề / Trời · Đất · Núi
        </Text>
      </Flex>
    </div>
  );
}
