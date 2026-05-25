"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

import { siteData } from "@/database/site-data";

export function Navbar() {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, navX: 0, navY: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      navX: position.x,
      navY: position.y,
    };
    setIsDragging(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (!isDragging) {
      return;
    }

    const dragStart = dragStartRef.current;
    setPosition({
      x: dragStart.navX + event.clientX - dragStart.pointerX,
      y: dragStart.navY + event.clientY - dragStart.pointerY,
    });
  }

  function handlePointerUp(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsDragging(false);
  }

  return (
    <nav
      className={`hero-nav fixed left-1/2 top-7 z-50 ${
        hasScrolled ? "is-scrolled" : ""
      } ${isDragging ? "is-dragging" : ""
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        transform: `translate3d(calc(-50% + ${position.x}px), ${position.y}px, 0)`,
      }}
    >
      <Flex align="center" gap="5" justify="center">
        {siteData.navigation.map((item) => (
          <Button className="hero-nav-link" key={item} size="1" variant="ghost">
            {item}
          </Button>
        ))}
      </Flex>
    </nav>
  );
}
