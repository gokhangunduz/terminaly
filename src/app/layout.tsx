import React from "react";
import "@/styles/global.css";
import "animate.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
