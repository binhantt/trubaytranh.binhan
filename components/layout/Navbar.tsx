import { Button, Flex } from "@radix-ui/themes";

const navigationItems = [
  { href: "#gallery", label: "Bảng xếp hạng" },
  { href: "#exhibitions", label: "Triển lãm" },
  { href: "#visit-gallery", label: "Địa chỉ tổ chức" },
  { href: "#site-footer", label: "Liên hệ" },
];

export function Navbar() {
  return (
    <nav className="hero-nav fixed left-1/2 top-7 z-50">
      <Flex align="center" className="hero-nav-list" gap="5" justify="center">
        {navigationItems.map((item) => (
          <Button asChild className="hero-nav-link" key={item.href} size="1" variant="ghost">
            <a href={item.href}>{item.label}</a>
          </Button>
        ))}
      </Flex>
    </nav>
  );
}
