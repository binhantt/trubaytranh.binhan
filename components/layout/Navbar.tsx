import { Button, Flex } from "@radix-ui/themes";

const navigationItems = [
  { href: "#home", label: "Trang chủ" },
  { href: "#gallery", label: "Bộ sưu tập" },
  { href: "#site-footer", label: "Liên hệ" },
];

export function Navbar() {
  return (
    <nav className="hero-nav fixed left-1/2 top-7 z-50">
      <Flex align="center" gap="5" justify="center">
        {navigationItems.map((item) => (
          <Button asChild className="hero-nav-link" key={item.href} size="1" variant="ghost">
            <a href={item.href}>{item.label}</a>
          </Button>
        ))}
      </Flex>
    </nav>
  );
}
