"use client";
import { useAppStore } from "@/store/store";
import { Editor } from "@monaco-editor/react";
import { Card } from "./ui/card";

export const CodeEditor = () => {
	const { code, setCode } = useAppStore();
	return (
		<Card className="p-2 bg-slate-800 h-[500px] w-full max-w-5xl border-0">
			<Editor
				defaultLanguage="typescript"
				theme="vs-dark"
				defaultValue={code}
				onChange={value => setCode(value!)}
			/>
		</Card>
	);
};
