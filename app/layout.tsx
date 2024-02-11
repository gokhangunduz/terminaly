"use client";

import { ReactElement } from "react";
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
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
