import React, { ReactElement } from "react";
import "@/styles/global.css";
import "animate.css";

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
      <body
        style={{
          backgroundColor: "#000",
        }}
      >
        <main className="w-screen h-screen">{children}</main>
      </body>
    </html>
  );
}
