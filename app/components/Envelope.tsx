"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  title: string;
  content: string;
  icon: string;
}

interface EnvelopeProps {
  msg: Message;
  onOpen: (id: number) => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ msg, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      onOpen(msg.id);
    }
  };

  return (
    <div
      onClick={handleOpen}
      className={`relative cursor-pointer min-h-[150px] flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-300 hover:scale-105
        ${isOpen
          ? "bg-white shadow-inner border-2 border-pink-200"
          : "bg-gradient-to-br from-pink-100 to-rose-200 shadow-lg border-2 border-pink-300 hover:shadow-xl hover:rotate-1"
        }`}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            className="flex flex-col items-center gap-2"
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <span className="text-4xl drop-shadow-sm animate-bounce">
              {msg.icon}
            </span>
            <span className="text-pink-600 font-bold text-xs uppercase tracking-wide">
              {msg.title}
            </span>
            <span className="text-pink-400 text-[10px]">toque para abrir 💌</span>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-2"
          >
            <span className="text-2xl block mb-2">{msg.icon}</span>
            <p className="text-pink-700 font-medium leading-relaxed italic text-sm">
              &ldquo;{msg.content}&rdquo;
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
