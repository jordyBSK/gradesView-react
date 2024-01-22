import { create } from 'zustand'

interface AverageStore{
    math:null | number,
    ang:null | number,
    epsic:null | number,
    societe:null |number,
    cie:null | number,
}

export const useAverageStore = create<AverageStore>((set) => ({
    math: 2,
    ang:5,
    epsic:6,
    societe:5,
    cie:5,
    updateAverage: (newAverage : number, key: keyof AverageStore) => set(() => ({[key]:newAverage}))  }))