import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import i18n from "src/locales/i18n";

interface IStore {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

export const useControlLanguage = create(
  persist<IStore>(
    (set) => ({
      currentLanguage: i18n.language,
      setCurrentLanguage: (language) => set({ currentLanguage: language }),
    }),
    {
      name: "tours",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
