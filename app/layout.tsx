import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";
import { cookies, headers } from "next/headers";
import translations from "@/locales/translations.json";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

async function getLanguage(): Promise<"tr" | "en"> {
  const cookieStore = await cookies();
  const languageCookie = cookieStore.get("language")?.value;

  if (languageCookie === "tr" || languageCookie === "en") {
    return languageCookie;
  }

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  if (acceptLanguage) {
    const primaryLanguage = acceptLanguage.split(",")[0].split("-")[0];
    if (primaryLanguage === "tr") return "tr";
    if (primaryLanguage === "en") return "en";
  }

  return "tr";
}

export async function generateMetadata(): Promise<Metadata> {
  const language = await getLanguage();
  const t = translations[language].metadata;

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getLanguage();

  return (
    <html lang={language} className="dark" suppressHydrationWarning>
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
