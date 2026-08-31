import type { Metadata } from "next";
import "./globals.css";
const title = "My Story Detective | AI-Powered Early Literacy";
const description = "An AI-supported literacy coach providing personalized, science-of-reading support for struggling K–2 readers.";
export const metadata: Metadata = {
  metadataBase: new URL("https://my-story-detective.warschauer.chatgpt.site"),
  title,
  description,
  openGraph: { title, description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "My Story Detective — An AI-Supported Literacy Coach for Struggling Readers." }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
