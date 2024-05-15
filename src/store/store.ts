import { create } from "zustand";

interface AppStore {
	code: string;
	setCode: (code: string) => void;
	modelAnswer: string;
	setModelAnswer: (
		update: string | ((prevModelAnswer: string) => string)
	) => void;
	selectedLanguage: string;
	setSelectedLanguage: (selectedLanguage: string) => void;
}

export const useAppStore = create<AppStore>(set => ({
	code: "// write your code here",
	setCode: (code: string) => set({ code }),
	modelAnswer: "",
	selectedLanguage: "js",
	setSelectedLanguage: (selectedLanguage: string) => set({ selectedLanguage }),
	setModelAnswer: (update: string | ((prevModelAnswer: string) => string)) =>
		set(state => ({
			modelAnswer:
				typeof update === "function" ? update(state.modelAnswer) : update,
		})),
}));
