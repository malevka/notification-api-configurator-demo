import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyles from "../styles/GlobalStyles";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Notification Configurator",
  description: "Generate config for Notification API",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon"
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml"
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
