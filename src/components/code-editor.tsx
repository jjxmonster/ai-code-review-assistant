"use client";
import { useAppStore } from "@/store/store";
import { Editor } from "@monaco-editor/react";

export const CodeEditor = () => {
	const { code, setCode } = useAppStore();
	return (
		<Editor
			height="50vh"
			width="50VW"
			defaultLanguage="typescript"
			theme="vs-dark"
			defaultValue={code}
			onChange={value => setCode(value!)}
		/>
	);
};
