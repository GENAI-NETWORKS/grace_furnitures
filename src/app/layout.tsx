import type { Metadata } from "next";
import "./globals.css";
import ClientScripts from "@/components/ClientScripts";

export const metadata: Metadata = {
  title: "GRACE™ Premium Furniture Manufacturer | Salem, Tamil Nadu",
  description: "Factory-direct premium furniture manufacturer based in Salem, Tamil Nadu. Quality furniture for hotels, showrooms, offices and interior designers.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
