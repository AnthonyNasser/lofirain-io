import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lofi Rain",
    template: "%s | Lofi Rain",
  },
  description:
    "Lofi music with a cloud for company. Pick a companion, add rain, set a timer, and focus.",
};

export const viewport: Viewport = {
  themeColor: "#efe8fc",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${figtree.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
