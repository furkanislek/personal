import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";
import { getLanguage } from "@/lib/language";
import translations from "@/locales/translations.json";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const language = await getLanguage();
  const t = translations[language].metadata;

  return {
    title: t.title,
    description: t.description,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/icon.png',
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getLanguage();

  return (
    <html
      lang={language}
      className={`dark ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-background-dark text-slate-300 antialiased overflow-x-hidden relative min-h-screen flex flex-col font-display"
        suppressHydrationWarning
      >
        <div
          className="fixed inset-0 z-0 opacity-5 pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, #2ee2e5 1px, transparent 1px), linear-gradient(to bottom, #2ee2e5 1px, transparent 1px)",
          }}
        />
        <ReduxProvider initialLanguage={language}>{children}</ReduxProvider>
      </body>
    </html>
  );
}
