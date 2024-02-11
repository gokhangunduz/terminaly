"use client";

import { ReactElement } from "react";
import "@/styles/global.css";
import "animate.css";
import MainProvider from "@/providers/app.provider";
import MainLayout from "@/layouts/main.layout";

export default function RootLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
        <title>Gökhan Gündüz</title>
        <meta name="description" content="Hi! I'm Gökhan Gündüz" />
      </head>
      <body className="w-screen h-screen bg-black">
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
}
