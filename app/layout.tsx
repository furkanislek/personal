import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Furkan Akif İşlek - Blog",
  description:
    "Yazılım geliştirme süreçlerinde edindiğim tecrübeler, karşılaştığım hatalar ve modern web teknolojileri üzerine notlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} bg-background-light dark:bg-background-dark text-slate-200 dark:text-slate-300 antialiased overflow-x-hidden relative min-h-screen flex flex-col font-display`}
        suppressHydrationWarning
      >
        {/* Background Grid Effect */}
        <div
          className="fixed inset-0 z-0 opacity-5 pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, #2ee2e5 1px, transparent 1px), linear-gradient(to bottom, #2ee2e5 1px, transparent 1px)",
          }}
        />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
