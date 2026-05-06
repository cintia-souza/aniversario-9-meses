import { useState, useCallback } from "react";

export const useProgress = (totalMessages: number) => {
  const [openedIds, setOpenedIds] = useState<number[]>([]);

  const markAsOpened = useCallback((id: number) => {
    setOpenedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  return {
    openedIds,
    markAsOpened,
    isComplete: openedIds.length === totalMessages,
    isLoaded: true,
  };
};
