import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://company-brain-harness.run.app";
const title = "Company Brain Harness | Governed company memory for AI agents";
const description =
  "Installable Company Brain Harness documentation for building source-governed organizational memory that Claude, Codex, teams, and operators can safely use.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Company Brain Harness",
  manifest: "/site.webmanifest",
  authors: [{ name: "Company Brain Harness" }],
  creator: "Company Brain Harness",
  publisher: "Company Brain Harness",
  category: "AI operations",
  keywords: [
    "company brain",
    "second brain for teams",
    "AI agent memory",
    "Claude Code plugin",
    "Codex plugin",
    "source governance",
    "knowledge operations",
    "organizational memory",
    "AI documentation",
    "company operating system",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Company Brain Harness",
    title,
    description,
    images: [
      {
        url: "/company-brain-system.png",
        width: 1536,
        height: 1024,
        alt: "Company Brain Harness governed source capture and review interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/company-brain-system.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "ai-discovery": "/llms.txt",
    "llm-context": "/ai.txt",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Company Brain Harness",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Claude Code, Codex, filesystem-backed knowledge roots",
  url: siteUrl,
  description,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Installable Claude and Codex plugin bundle",
    "Source-governed company memory root",
    "Preview-first setup and write controls",
    "Private raw evidence and staged review queue",
    "Source registry for Slack, Confluence, CRM, Fireflies, GitHub, and delegated email scopes",
    "Brain health, lint, sync, approval, and promotion scripts",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Founders, operators, agencies, and teams adopting AI agents",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
