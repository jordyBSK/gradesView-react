import create from 'zustand';

export interface AverageStore {
    "Mathematiques": null | number;
    "Anglais": null | number;
    "SocieteEtLangues": null | number;
    "ModulesEPSIC": null | number;
    "ModulesCIE": null | number;
    updateAverage: (newAverage: number | null, key: keyof AverageStore) => void;
}

export const useAverageStore = create<AverageStore>((set) => ({
    "Mathematiques": null,
    "Anglais": null, 
    "SocieteEtLangues": null,
    "ModulesEPSIC": null,
    "ModulesCIE": null,
    updateAverage: (newAverage: number | null, key: keyof AverageStore) =>
        set((state) => ({ ...state, [key]: newAverage })),
}));
