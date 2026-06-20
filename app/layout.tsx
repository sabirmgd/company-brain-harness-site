import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://companyos.deleg8.dev";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
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
        url: "/cbh-og-image.png",
        width: 2752,
        height: 1536,
        alt: "Company Brain Harness — governed company memory for AI agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cbh-og-image.png"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2DK7PQFZ2C"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2DK7PQFZ2C');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
