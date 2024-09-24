import { create } from "zustand"

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    current: { playlist: null, song: null, songs: [] },
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))