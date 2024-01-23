import { create } from 'zustand';

interface AverageStore {
    math: null | number;
    ang: null | number;
    epsic: null | number;
    societe: null | number;
    cie: null | number;
    updateAverage: (newAverage: number | null, key: keyof AverageStore) => void;
}

export const useAverageStore = create<AverageStore>((set) => ({
    math: null,
    ang: null,
    epsic: null,
    societe: null,
    cie: null,

    updateAverage: (newAverage: number | null, key: keyof AverageStore) => set(() => ({ [key]: newAverage })),}));
