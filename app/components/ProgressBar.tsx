"use client";

import React from "react";

interface ProgressProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md mb-8">
      <div className="relative bg-white/70 rounded-full h-7 p-1 border-2 border-pink-200 shadow-md">
        <div
          className="h-full bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 rounded-full flex items-center justify-end pr-1 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          {progress > 0 && <span className="text-xs">💗</span>}
        </div>
      </div>
      <p className="text-center text-xs mt-2 font-medium text-pink-500">
        {current} de {total} memórias desbloqueadas ✨
      </p>
    </div>
  );
};
