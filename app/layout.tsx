import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "OpenAI - Decentralized AI Funding Platform",
  description: "A new economic primitive for funding decentralized AI. Stake, vote, and pay for the best open source decentralized LLMs to compete against OpenAI.",
  keywords: ["AI", "decentralized", "LLM", "blockchain", "funding", "open source"],
  authors: [{ name: "OpenAI" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
