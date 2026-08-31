import type { Metadata } from "next";
import "./globals.css";
const title = "My Story Detective | AI-Powered Early Literacy";
const description = "An AI-powered dialogic reading and phonics platform helping young learners build strong foundations for reading.";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "My Story Detective — Every story is a mystery waiting to be solved." }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
