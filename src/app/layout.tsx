import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "I DESIGN MAKER | Premium Signage, Digital Displays & Fabrication | Bengaluru",
  description:
    "I DESIGN MAKER – Bengaluru's leading signage, branding, digital display, CNC laser cutting and fabrication company. Premium end-to-end solutions for retail, corporate, hospitals, hotels & more. Call +91 98455 72653.",
  keywords:
    "signage company bangalore, led signs bangalore, digital display bangalore, cnc laser cutting bangalore, acrylic letters bangalore, stainless steel letters, fabrication company bangalore, I Design Maker",
  authors: [{ name: "I Design Maker" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://idesignmaker.in",
    siteName: "I DESIGN MAKER",
    title: "I DESIGN MAKER | Premium Signage & Fabrication | Bengaluru",
    description:
      "Premium signage, digital displays, CNC laser cutting and fabrication company in Bengaluru. 1500+ projects, 500+ happy clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "I DESIGN MAKER | Premium Signage & Fabrication",
    description: "Premium signage, digital displays, CNC laser cutting in Bengaluru.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "I DESIGN MAKER",
  description:
    "Premium signage, digital display, printing, fabrication, CNC and laser cutting company in Bengaluru, India.",
  url: "https://idesignmaker.in",
  telephone: "+919845572653",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Main Rd, Sharada Colony, BEML Layout, Kamakshipalya",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560079",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/idesignmaker",
    "https://www.facebook.com/idesignmaker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
