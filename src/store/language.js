import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      language: 'es',
      changeLanguage: (language) => set((prevState) => ({ language })),
    }),
    {
      name: 'language-storage',
      getStorage: () => localStorage,
    },
  ),
);
