import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cotidieapp.github.io/cotidie-web/"),
  title: "Cotidie — Tu guía diaria de oración",
  description: "Descarga Cotidie para Android mediante APK o accede desde la web en Android, iPhone y iPad.",
  icons: {
    icon: "/cotidie-web/brand/icon.png",
    apple: "/cotidie-web/brand/icon.png",
  },
  openGraph: {
    title: "Cotidie — Tus oraciones cotidianas, en un solo lugar",
    description: "Oración, Plan de Vida, lecturas y audios en una experiencia serena para cada día.",
    type: "website",
    images: [{ url: "/cotidie-web/og.png", width: 1536, height: 1024, alt: "Cotidie, tu guía diaria de oración" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cotidie — Tu guía diaria de oración",
    description: "Tus oraciones cotidianas, en un solo lugar.",
    images: ["/cotidie-web/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
