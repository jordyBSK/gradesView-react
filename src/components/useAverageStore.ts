import { create } from 'zustand'

interface AverageStore{
    math:null | number,
    ang:null | number,
    epsic:null | number,
    cie:null | number,
}

export const useAverageStore = create((set) => ({
    math:null,
    ang:null,
    epsic:null,
    cie:null,
    updateAverage: (newAverage : number, key: keyof AverageStore) => set(() => ({[key]:newAverage}))  }))