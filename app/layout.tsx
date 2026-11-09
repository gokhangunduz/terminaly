import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import MainLayout from "@/layouts/main.layout";
import "@/styles/global.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Gökhan Gündüz",
  description: "Hi! I'm Gökhan Gündüz",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
