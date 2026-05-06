"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useProgress } from "./hooks/useProgress";
import { BackgroundScene } from "./components/BackgroundScene";
import { ProgressBar } from "./components/ProgressBar";
import { Envelope } from "./components/Envelope";
import { messages } from "./data/messages";

export default function AnniversaryPage() {
  const [started, setStarted] = useState(false);
  const { openedIds, markAsOpened, isComplete } = useProgress(messages.length);

  useEffect(() => {
    if (isComplete) {
      const duration = 5000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#ffc0cb", "#ff69b4", "#f9a8d4"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#ffc0cb", "#ff69b4", "#f9a8d4"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [isComplete]);

  if (!started) {
    return (
      <BackgroundScene showCard={false}>
        <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
            🎮 Nossos 9 Meses 🐱
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-md">
            Uma aventura feita com amor, animes e gatinhos 💕
          </p>
          <button
            onClick={() => setStarted(true)}
            className="mt-4 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
          >
            Clique aqui, meu amor 💌
          </button>
        </div>
      </BackgroundScene>
    );
  }

  return (
    <BackgroundScene showCard>
      <header className="text-center mb-10 mt-4">
        <h1 className="text-4xl md:text-5xl font-black text-pink-600 drop-shadow-md">
          Nossos 9 Meses 💕
        </h1>
        <p className="text-pink-400 mt-3 font-medium italic text-sm md:text-base">
          Cada clique é um pedaço da nossa história... 🎮🐱
        </p>
      </header>

      <ProgressBar current={openedIds.length} total={messages.length} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
        {messages.map((msg) => (
          <Envelope key={msg.id} msg={msg} onOpen={markAsOpened} />
        ))}
      </div>

      {isComplete && (
        <div className="mt-12 p-8 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-pink-300 text-center shadow-2xl animate-fade-in">
          <span className="text-4xl block mb-3">🐱✨</span>
          <p className="text-2xl font-bold text-pink-600">
            Você desbloqueou todo o meu amor!
          </p>
          <p className="text-pink-400 text-sm mt-2">
            Feliz aniversário de namoro, my King! 💗🎮
          </p>
        </div>
      )}
    </BackgroundScene>
  );
}
