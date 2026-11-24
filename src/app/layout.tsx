import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConsoleProvider from "@/components/Console";
import { Analytics } from "@vercel/analytics/next"

// Initialize Gilroy font
const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.ttf',    
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Nexora Lab (枢光) | Next-Gen Tech Studio",
  description: "Nexora Lab (枢光) is a next-generation tech studio exploring intelligent systems, futuristic digital tools, and creative engineering.",
  keywords: ["Nexora", "Nexora Lab", "枢光", "portfolio", "tech studio", "AI", "web development"],
  authors: [{ name: "Nexora Lab" }],
  creator: "Nexora Lab",
  publisher: "Nexora Lab",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Nexora Lab (枢光) | Next-Gen Tech Studio",
    description: "Nexora Lab (枢光) is a next-generation tech studio exploring intelligent systems, futuristic digital tools, and creative engineering.",
    siteName: "Nexora Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Lab (枢光) | Next-Gen Tech Studio",
    description: "Nexora Lab (枢光) is a next-generation tech studio exploring intelligent systems, futuristic digital tools, and creative engineering.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} font-gilroy antialiased`}>
        <ConsoleProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
