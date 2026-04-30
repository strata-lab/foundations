import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataconsult.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Strata Consulting — Web Development & Digital Optimization",
    template: "%s | Strata Consulting",
  },
  description:
    "Strata Consulting builds fast, accessible websites and optimizes your digital footprint and platform utilization. Ship the right thing, faster.",
  keywords: [
    "web development",
    "digital optimization",
    "platform utilization",
    "consulting",
  ],
  authors: [{ name: "Strata Consulting" }],
  creator: "Strata Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Strata Consulting",
    title: "Strata Consulting — Web Development & Digital Optimization",
    description:
      "We build websites that perform and help businesses get more from their digital presence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strata Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strata Consulting — Web Development & Digital Optimization",
    description:
      "We build websites that perform and help businesses get more from their digital presence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Strata Consulting",
  url: siteUrl,
  description:
    "Web development and digital optimization consultancy specializing in building fast, accessible websites and maximizing platform utilization.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@strataconsult.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
