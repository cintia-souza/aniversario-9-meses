"use client";

import React from "react";
import Image from "next/image";

interface BackgroundSceneProps {
  children: React.ReactNode;
  showCard?: boolean;
}

export const BackgroundScene: React.FC<BackgroundSceneProps> = ({ children, showCard = true }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Imagem de fundo anime */}
      <Image
        src="/anime_romantic.png"
        alt=""
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay - mais escuro na tela inicial para destacar o texto branco */}
      <div className={`absolute inset-0 z-[1] ${showCard
        ? "bg-gradient-to-b from-pink-100/70 via-rose-50/60 to-purple-100/70"
        : "bg-black/30"
      }`} />

      {/* Corações flutuantes com foto */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute bottom-0 animate-float-up"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <div className="w-10 h-10 overflow-hidden heart-shape">
              <Image
                src="/real_life.jpeg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <main className="relative z-[2] flex flex-col items-center justify-center p-6 md:p-10 w-full min-h-screen">
        {showCard ? (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 p-6 md:p-10 w-full max-w-4xl flex flex-col items-center animate-fade-in">
            {children}
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};
