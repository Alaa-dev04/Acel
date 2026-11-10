
"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

type ContactDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ContactDailog = ({ isOpen, onClose }: ContactDialogProps) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full  rounded-lg bg-white p-6 shadow-lg"
                        dir="rtl"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close dialog"
                            className="mb-4 text-gray-500 hover:text-gray-700"
                        >
                            <X size={24} />
                        </button>

                        <ContactForm />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactDailog;
