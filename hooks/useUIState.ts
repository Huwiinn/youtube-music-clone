import { create } from "zustand";

interface UIState {
  homeCategory: string;
  headerImgSrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImgSrc: (src: string) => void;
}

const useUIState = create<UIState>((set) => ({
  homeCategory: "",
  headerImgSrc: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value: string) => set({ homeCategory: value }),
  setHeaderImgSrc: (src: string) => set({ headerImgSrc: src }),
}));

export default useUIState;
