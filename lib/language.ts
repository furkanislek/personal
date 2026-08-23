import { cookies, headers } from "next/headers";

export type Language = "tr" | "en";

/** Sunucu tarafında dil tespiti: önce `language` çerezi, sonra Accept-Language. */
export async function getLanguage(): Promise<Language> {
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
