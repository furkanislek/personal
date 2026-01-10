"use client";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { ArrowLeft, Terminal, Calendar, Tag } from "lucide-react";

const BlogList = () => {
  const language = useAppSelector((state) => state.language.language);
  const blogData = useAppSelector((state) => state.language.blogTranslations);

  const blogPosts = blogData.blogs
    .map((blog) => ({
      ...blog,
      tags: blog.tags.split(", "),
    }))
    .sort((a, b) => b.id - a.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 opacity-20">
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
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm">
              {language === "tr" ? "ANA SAYFA" : "HOME"}
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="text-cyan-400" size={32} />
            <h1 className="text-lg md:text-2xl font-bold text-white font-mono">
              BLOG
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-400"
              >
                _
              </motion.span>
            </h1>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent" />
     
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <Link href={`/blog/${post.slug}`}>
                <motion.article
                  whileHover={{ y: -5 }}
                  className="relative bg-gray-900/80 border-2 border-cyan-500/40 rounded-lg overflow-hidden backdrop-blur-sm group cursor-pointer h-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative h-48 overflow-hidden border-b-2 border-cyan-500/40">
                    <img
                      src={post.imglink}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>

                  <div className="p-6 relative">
                    <div className="flex items-center gap-4 mb-3 text-xs font-mono text-cyan-400/80">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Terminal size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-cyan-400 font-mono text-sm">
                      <span>
                        {language === "tr" ? "Devamını Oku" : "Read More"}
                      </span>
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
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[3rem] border-r-[3rem] border-t-cyan-500/20 border-r-transparent" />
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-cyan-500/60 font-mono text-sm border border-cyan-500/30 px-4 py-2 rounded">
            <span>{"["}</span>
            <span>
              {blogPosts.length}{" "}
              {language === "tr" ? "YAZI BULUNDU" : "POSTS FOUND"}
            </span>
            <span>{"]"}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogList;
