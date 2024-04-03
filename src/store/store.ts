import { create } from "zustand";

interface AppStore {
	code: string;
	setCode: (code: string) => void;
	modelAnswer: string;
	setModelAnswer: (
		update: string | ((prevModelAnswer: string) => string)
	) => void;
}

export const useAppStore = create<AppStore>(set => ({
	code: "// write your code here",
	setCode: (code: string) => set({ code }),
	modelAnswer: "",
	setModelAnswer: (update: string | ((prevModelAnswer: string) => string)) =>
		set(state => ({
			modelAnswer:
				typeof update === "function" ? update(state.modelAnswer) : update,
		})),
}));
