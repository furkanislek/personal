"use client";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import {
  ArrowLeft,
  Terminal,
  Calendar,
  Tag,
  Share2,
  Code2,
  X,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const BlogDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const language = useAppSelector((state) => state.language.language);
  const blogData = useAppSelector((state) => state.language.blogTranslations);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const blogPost = blogData.blogs.find((blog) => blog.slug === slug);

  const post = blogPost || blogData.blogs[0];

  const tags = post.tags.split(", ");

  useEffect(() => {
    if (contentRef.current) {
      const unwantedElements =
        contentRef.current.querySelectorAll("script, style");
      unwantedElements.forEach((el) => el.remove());

      const links = contentRef.current.querySelectorAll("a");
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });

      const h2s = contentRef.current.querySelectorAll("h2");
      h2s.forEach((h2) => {
        if (!h2.querySelector("span.retro-icon")) {
          const icon = document.createElement("span");
          icon.innerHTML = "> ";
          icon.className = "text-cyan-500 retro-icon";
          h2.prepend(icon);
        }
      });

      const lis = contentRef.current.querySelectorAll("ul > li");
      lis.forEach((li) => {
        if (!li.querySelector(".custom-bullet")) {
          const marker = document.createElement("span");
          marker.innerHTML = "▹ ";
          marker.className = "text-cyan-400 custom-bullet mr-2";
          li.classList.add("flex", "items-start", "gap-1");
          li.prepend(marker);
        }
      });

      const images = contentRef.current.querySelectorAll("img");
      images.forEach((img) => {
        img.classList.add(
          "retro-image",
          "cursor-pointer",
          "hover:opacity-80",
          "transition-opacity"
        );
        img.setAttribute("loading", "lazy");
        img.addEventListener("click", () => {
          setLightboxImage(img.src);
        });
      });
    }
  }, [post.html]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none z-10"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-20 px-4 md:px-8 xl:px-[15%] 2xl:px-[20%] py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm">
              {language === "tr" ? "BLOG LİSTESİ" : "BLOG LIST"}
            </span>
          </Link>

          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-900/80 border-2 border-cyan-500/40 rounded px-4 py-2 text-cyan-400 hover:bg-cyan-500/10 transition-colors font-mono text-sm"
          >
            <Share2 size={16} />
            <span>{language === "tr" ? "PAYLAŞ" : "SHARE"}</span>
          </motion.button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-900/60 border-2 border-cyan-500/40 rounded-lg overflow-hidden backdrop-blur-sm"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none z-10"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative h-64 md:h-96 overflow-hidden border-b-2 border-cyan-500/40">
            <img
              src={post.imglink}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="text-cyan-400" size={24} />
                <span className="text-cyan-400 font-mono text-sm">
                  {">"} BLOG_POST
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="border-b-2 border-cyan-500/40 bg-gray-900/80 p-4 md:p-6">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-mono">
              <div className="flex items-center gap-2 text-cyan-400">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Terminal size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">AUTHOR:</span> {post.author}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded border border-cyan-500/30"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500"></div>
              <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="text-cyan-400" size={20} />
                  <span className="text-cyan-400 font-mono text-sm font-bold">
                    {language === "tr" ? "ÖZET" : "SUMMARY"}
                  </span>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {post.summary}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              ref={contentRef}
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[4rem] border-r-[4rem] border-t-cyan-500/20 border-r-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20">
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[4rem] border-l-[4rem] border-b-cyan-500/20 border-l-transparent" />
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <Link
            href="/blog"
            className="flex items-center gap-2 bg-gray-900/80 border-2 border-cyan-500/40 rounded px-6 py-3 text-cyan-400 hover:bg-cyan-500/10 transition-colors font-mono text-sm group"
          >
            <Terminal size={16} />
            <span>{language === "tr" ? "TÜM YAZILAR" : "ALL POSTS"}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {">>"}
            </motion.span>
          </Link>

          <div className="flex items-center gap-2 text-cyan-500/60 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded">
            <span>{"["}</span>
            <span>EOF</span>
            <span>{"]"}</span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 bg-gray-900/80 border-2 border-cyan-500/40 rounded text-cyan-400 hover:bg-cyan-500/10 transition-colors z-10"
          >
            <X size={24} />
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            src={lightboxImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg border-2 border-cyan-500/40"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
};

export default BlogDetail;
