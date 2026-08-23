import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/components/BlogDetail";
import blogTranslations from "@/locales/blog-translations.json";
import { getLanguage } from "@/lib/language";

type Params = Promise<{ slug: string }>;

function findPost(language: "tr" | "en", slug: string) {
  return blogTranslations[language].blogs.find((blog) => blog.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const language = await getLanguage();
  const post = findPost(language, slug);

  if (!post) {
    return { title: language === "tr" ? "Yazı bulunamadı" : "Post not found" };
  }

  return {
    title: `${post.title} | Furkan Akif İşlek`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      images: post.imglink ? [{ url: post.imglink }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;

  // Slug'lar her iki dilde de aynı; hiçbirinde yoksa 404.
  if (!findPost("tr", slug) && !findPost("en", slug)) {
    notFound();
  }

  return <BlogDetail slug={slug} />;
}
