import Head from "next/head";
import { ReactElement } from "react";

interface IDOMProvider {
  children: ReactElement | ReactElement[];
}

export default function DOMProvider({ children }: IDOMProvider): ReactElement {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
        <title>Gökhan Gündüz</title>
        <meta name="description" content="Hi! I'm Gökhan Gündüz" />
      </Head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
