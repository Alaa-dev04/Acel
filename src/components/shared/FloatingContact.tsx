"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import ContactDialog from "@/components/ContactDailog";

const FloatingContact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div>
             <div dir="rtl" className="fixed end-3 top-1/2 z-40 -translate-y-1/2 w-[114px]">
            <ul className="flex flex-col gap-8 rounded-[8px] bg-[#6F6F6F]/35 px-6 py-6 text-white ">
                {/* whatapp icon  */}
                <motion.li
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.15 }}
                >
                    <Link href='#'
                        className="flex flex-col items-center gap-1.5 text-sm  "
                    >
                        <FaWhatsapp size={20} />
                        <span>واتس اب</span>
                    </Link>
                </motion.li>
                {/* square mail  */}
                <motion.li
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.15 }}
                >
                    <button onClick={() => setIsDialogOpen(true)}
                        className="flex flex-col items-center gap-1.5 text-sm cursor-pointer ">
                        < Mail size={20} />
                        <span> تواصل معنا</span>
                    </button>
                </motion.li>
            </ul>
           
        </div>
         <ContactDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </div>
       
    )
}

export default FloatingContact
