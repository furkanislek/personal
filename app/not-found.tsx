import Link from "next/link";
import { getLanguage } from "@/lib/language";

export default async function NotFound() {
  const language = await getLanguage();
  const isTr = language === "tr";

  return (
    <main className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="w-full max-w-lg bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm border border-teal-700/50 rounded-xl overflow-hidden">
        <div className="border-b border-teal-700/50 px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <h4 className="text-gray-500 text-xs sm:text-sm font-mono flex-1 text-center truncate">
            user@portfolio:~/404
          </h4>
        </div>
        <div className="p-6 space-y-4 font-mono">
          <div>
            <span className="text-cyan-400 mr-2">➜</span>
            <span className="text-purple-400 mr-2">~</span>
            <span className="text-gray-400">cd {isTr ? "sayfa" : "page"}</span>
          </div>
          <p className="text-red-400 text-sm">
            {isTr
              ? "bash: cd: sayfa: Böyle bir dosya ya da dizin yok (404)"
              : "bash: cd: page: No such file or directory (404)"}
          </p>
          <p className="text-gray-400 text-sm">
            {isTr
              ? "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir."
              : "The page you are looking for may have moved or never existed."}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-5 rounded-lg transition-colors text-sm"
          >
            {">"} {isTr ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
          </Link>
        </div>
      </div>
    </main>
  );
}
