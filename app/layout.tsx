import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MA Design and Interaction | Aptitude Test Portfolio",
  description: "Exposé and Portfolio for Rhine-Waal University MA Design and Interaction Application",
  keywords: ["design", "interaction", "UX", "calm technology", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
        style={{
          fontFamily: "var(--font-inter), var(--font-sans)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
