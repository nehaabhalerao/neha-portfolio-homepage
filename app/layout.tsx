import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neha Bhalerao | Software Developer",
  description:
    "Portfolio of Neha Bhalerao — software developer working across Python, backend APIs, full-stack applications, and Generative AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
