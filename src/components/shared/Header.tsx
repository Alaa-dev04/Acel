"use client";

import { motion } from "motion/react";
import { Search, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Links = [
    { name: "الرئيسية", href: "/" },
    { name: "المشروعات", href: "/projects" },
    { name: "المواقع", href: "/sites" },
    { name: "من نحن", href: "/about" },
]
const Header = () => {
    const pathname = usePathname();
    return (
        <motion.header className="w-full bg-black" dir="rtl">
            <div className="bg-black flex  justify-between gap-4 ">
                <div className="flex  gap-4  w-full ">
                    <Link href="/" className=" md:m-3" >
                        <Image src="/logo.png" alt="logo-acel" width={64} height={64} />
                    </Link>
                    <nav className="hidden shrink-0 items-center gap-12 md:flex lg:gap-14">

                        {Links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-sm font-semibold lg:text-base ${pathname === link.href ? "text-[#FAFAFA]" : "text-white hover:text-white/80"
                                    }`}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.span
                                        className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#FAFAFA]"
                                        layoutId="underline"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>

                </div>
             <div className=" flex justify-between items-center gap-4  " > 
                {/* search bar  */}
               
                    <div className="relative w-full px- lg:px-0 lg:w-[300px] ">
                        <input
                            type="text"
                            placeholder="ابحث باسم المشروع"
                            className="w-full text-right rounded-[8px] border border-[#3D3D3D] bg-white px-4 py-2 pr-10 text-sm text-gray-700 placeholder-[#9F9F9F] focus:border-white focus:outline-none lg:py-2.5"
                            defaultValue=""
                            readOnly
                        />
                        <button
                            type="button"
                            className="absolute left-3 top-1/2 -translate-y-1/2"
                        >
                            <Search className="h-5 w-5 text-[#9F9F9F]" />
                        </button>
                    </div>
                    {/* the contact icons  */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 shrink-0 ">
                            <span className="text-[#FAFAFA] text-sm  ">تواصل معنا</span>
                            <Image src="/whatsapp.svg" alt="whatsapp" width={20} height={20} />
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ">
                            <span className="text-[#FAFAFA]">19666</span>
                            <Phone className="h-5 w-5 text-[#FAFAFA]" />
                        </div>
                    </div>
                </div>

            </div>

        </motion.header>
    )
}

export default Header
