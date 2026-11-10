
"use client";

import { motion, AnimatePresence } from "motion/react";
import { Search, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Links = [
  { name: "الرئيسية", href: "/" },
  { name: "المشروعات", href: "/projects" },
  { name: "المواقع", href: "/sites" },
  { name: "من نحن", href: "/about" },
];

const Header = () => {
  const [open, isOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 text-white"
      dir="rtl"
    >
      {/* Main  */}
      <div className="mx-auto flex h-20  items-center justify-between gap-6 bg-transparent px-4 md:px-8 lg:px-12">

        {/* Logo  */}
        <div className="flex items-center gap-10 lg:gap-14">
          <Link href="/" onClick={() => isOpen(false)}>
            <Image
              src="/logo.png"
              alt="logo-acel"
              width={64}
              height={64}
              priority
            />
          </Link>

          <nav className="hidden shrink-0 items-center gap-10 lg:flex">
            {Links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold lg:text-base ${
                  isActive(link.href)
                    ? "text-[#FAFAFA]"
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}

                {isActive(link.href) && (
                  <motion.span
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FAFAFA]"
                    layoutId="underline"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Search + Contact */}
        <div className="hidden items-center gap-5 lg:flex">

          {/* Search */}
          <div className="relative h-[36px] w-[218px] xl:w-[300px]">
            <input
              type="text"
              placeholder="ابحث باسم المشروع"
              className="w-full rounded-[8px] border border-[#3D3D3D] bg-white ps-4 pe-10 text-right text-sm text-gray-700 placeholder-[#9F9F9F] focus:border-white focus:outline-none lg:py-2.5"
            />

            <button
              type="button"
              className="absolute end-3 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5 text-[#9F9F9F]" />
            </button>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-5">
            <Link href="https://wa.me/200000000000">
              <div className="flex shrink-0 items-center gap-1">
                <span className="text-sm text-[#FAFAFA]">
                  تواصل معنا
                </span>

                <FaWhatsapp  className="h-5 w-5 text-[#FAFAFA]" />
              </div>
            </Link>

            <Link href="tel:19666">
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-[#FAFAFA]">19666</span>
                <Phone className="h-5 w-5 text-[#FAFAFA]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2"
            onClick={() => isOpen((f) => !f)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-20 bg-black/50 rounded-2xl m-3 p-6 lg:hidden"
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-5">
              {Links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => isOpen(false)}
                  className={`text-base font-semibold ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Search */}
            <div className="relative mt-6">
              <input
                type="text"
                placeholder="ابحث باسم المشروع"
                className="w-full rounded-lg bg-white py-2.5 ps-4 pe-10 text-right text-sm text-gray-700 placeholder-[#9F9F9F] focus:outline-none"
              />

              <button
                type="button"
                className="absolute end-3 top-1/2 -translate-y-1/2"
              >
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Mobile Contact */}
            <div className="mt-6 gap-4 border-t border-white/20 pt-5 grid grid-cols-2 ">

              <Link
                href="https://wa.me/200000000000"
                onClick={() => isOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span>تواصل معنا</span>

                  <FaWhatsapp  className="h-5 w-5 text-[#FAFAFA]" />
                </div>
              </Link>

              <Link
                href="tel:19666"
                onClick={() => isOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span>19666</span>
                  <Phone className="h-5 w-5" />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
