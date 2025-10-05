import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import OctopusMascot from "@/components/OctopusMascot";

export const metadata: Metadata = {
  title: "Cloudflare Auth Platform",
  description: "Next.js authentication platform for Cloudflare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <OctopusMascot />
      </body>
    </html>
  );
}
