import { Badge, Button } from "@radix-ui/themes";

import { siteData } from "@/database/site-data";

export function HeroContent() {
  const [firstLine, accentLine, lastLine] = siteData.hero.titleLines;

  return (
    <div className="hero-copy-block flex max-w-[28rem] flex-col items-start gap-5">
      <Badge className="hero-badge" color="sky" highContrast variant="surface">
        {siteData.hero.badge}
      </Badge>

      <h1 className="text-[clamp(2.6rem,5.5vw,6.2rem)] font-semibold uppercase leading-[0.92] tracking-normal">
        {firstLine}
        <br />
        <span className="accent-word">{accentLine}</span>
        <br />
        {lastLine}
      </h1>

      <p className="max-w-[22rem] text-base font-medium leading-7 text-[color-mix(in_srgb,var(--color-white)_72%,var(--color-black))]">
        {siteData.hero.description}
      </p>

      <Button className="hero-action" highContrast size="2" variant="outline">
        {siteData.hero.actionLabel}
      </Button>
    </div>
  );
}
