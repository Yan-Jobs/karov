import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karov",
  description: "Des montres parfaites, comme vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
