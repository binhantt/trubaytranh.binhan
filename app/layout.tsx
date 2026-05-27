import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trung bay tranh ve",
  description: "Khong gian trung bay tranh ve hien dai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Theme accentColor="cyan" grayColor="slate" radius="full">
          {children}
        </Theme>
      </body>
    </html>
  );
}
