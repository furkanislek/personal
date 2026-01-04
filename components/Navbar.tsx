"use client";
import { SquareTerminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleLanguage } from "@/store/slices/languageSlice";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.language);
  const t = useAppSelector((state) => state.language.translations);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleLanguage = () => {
    dispatch(toggleLanguage());
  };

  const menuItems = [
    { name: t.navbar.home, href: "/" },
    { name: t.navbar.timeline, href: "/#timeline" },
    { name: t.navbar.projects, href: "/#projects" },
    { name: t.navbar.contact, href: "/#contact" },
    { name: t.navbar.blog, href: "/blog" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center w-full px-4 md:px-8 xl:px-[15%] 2xl:px-[20%] py-4 fixed top-0 left-0 bg-transparent backdrop-blur-xl z-50"
      >
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <SquareTerminal className="text-cyan-400" size={28} />
            </motion.div>
            <span className="text-cyan-400 font-bold text-xl">FURKAN.</span>
            <span className="font-bold text-xl">DEV</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-6"
        >
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  color: "#fff",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 cursor-pointer transition-colors"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}

          {/* Desktop Retro Language Switch */}
          <motion.button
            onClick={handleToggleLanguage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1, borderColor: "rgba(34, 211, 238, 0.6)" }}
            whileTap={{ scale: 1 }}
            className="relative bg-gray-900/80 border-2 border-cyan-500/40 rounded px-4 py-2 backdrop-blur-sm overflow-hidden group cursor-pointer text-sm"
          >
            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Content */}
            <div className="relative flex items-center gap-2">
              {/* Terminal bracket */}
              <span className="text-cyan-400 font-mono text-sm">{">"}</span>

              {/* Language display with flip animation */}
              <motion.div
                key={language}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1"
              >
                <span className="text-cyan-400 font-mono text-sm font-bold">
                  LANG:
                </span>
                <span className="text-white font-mono text-sm font-bold bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/40">
                  {language.toUpperCase()}
                </span>
              </motion.div>

              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-400 font-mono text-sm"
              >
                █
              </motion.span>
            </div>

            {/* Glow effect on hover */}
            <motion.div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300 pointer-events-none" />
          </motion.button>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative bg-gray-900/80 border-2 border-cyan-500/40 rounded p-2 backdrop-blur-sm overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isMenuOpen ? (
              <X className="text-cyan-400" size={24} />
            ) : (
              <Menu className="text-cyan-400" size={24} />
            )}
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Mobile Retro Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-gray-900/95 backdrop-blur-xl border-l-2 border-cyan-500/40 z-40 md:hidden"
          >
            {/* Retro Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* Scanline Effect */}
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

            <div className="relative h-full flex flex-col pt-24 px-8">
              {/* Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 pb-4 border-b-2 border-cyan-500/40"
              >
                <div className="flex items-center gap-2 text-cyan-400 font-mono">
                  <span>{">"}</span>
                  <span className="text-sm">MENU_SYSTEM</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    █
                  </motion.span>
                </div>
              </motion.div>

              {/* Menu Items */}
              <div className="flex flex-col gap-4 mb-8">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <motion.div
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      whileHover={{
                        x: 10,
                        color: "#fff",
                        transition: { duration: 0.2 },
                      }}
                      className="text-cyan-400 font-mono text-lg cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="text-cyan-500 group-hover:text-white transition-colors">
                        {">>"}
                      </span>
                      <span className="relative">
                        {item.name}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Mobile Language Switch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto mb-8"
              >
                <motion.button
                  onClick={handleToggleLanguage}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(34, 211, 238, 0.8)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative bg-gray-900/80 border-2 border-cyan-500/40 rounded px-4 py-3 backdrop-blur-sm overflow-hidden group cursor-pointer"
                >
                  {/* Scanline effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Content */}
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="text-cyan-400 font-mono text-sm">
                      {">"}
                    </span>
                    <motion.div
                      key={language}
                      initial={{ rotateX: 90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-cyan-400 font-mono text-sm font-bold">
                        LANG:
                      </span>
                      <span className="text-white font-mono text-sm font-bold bg-cyan-500/20 px-3 py-1 rounded border border-cyan-500/40">
                        {language.toUpperCase()}
                      </span>
                    </motion.div>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-cyan-400 font-mono text-sm"
                    >
                      █
                    </motion.span>
                  </div>

                  {/* Glow effect */}
                  <motion.div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 pointer-events-none" />
                </motion.button>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-cyan-500/60 font-mono text-xs text-center pb-4"
              >
                <div className="flex items-center justify-center gap-1">
                  <span>{"["}</span>
                  <span>SYSTEM READY</span>
                  <span>{"]"}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
