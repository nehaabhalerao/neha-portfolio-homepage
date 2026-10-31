import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Neha Bhalerao | Software Developer",
  description:
    "Portfolio of Neha Bhalerao — software developer working across Python, backend APIs, full-stack applications, and Generative AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-initialization"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("portfolio-theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){var t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
