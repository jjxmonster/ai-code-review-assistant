import { create } from "zustand";

interface AppStore {
	code: string;
	setCode: (code: string) => void;
	modelAnswer: string;
	setModelAnswer: (modelAnswer: string) => void;
}

export const useAppStore = create<AppStore>(set => ({
	code: "// write your code here",
	setCode: (code: string) => set({ code }),
	modelAnswer: "",
	setModelAnswer: (modelAnswer: string) => set({ modelAnswer }),
}));
