"use client";
import { useAppStore } from "@/store/store";
import { Editor, Monaco } from "@monaco-editor/react";
import { Card } from "./ui/card";

const handleEditorWillMount = (monaco: Monaco) => {
	monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
		noSemanticValidation: true,
		noSyntaxValidation: true,
	});

	monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
		noResolve: true,
	});
};

export const CodeEditor = () => {
	const { code, setCode } = useAppStore();
	return (
		<Card className="p-2 bg-slate-900 h-[500px] w-full max-w-5xl border-0">
			<Editor
				defaultLanguage="typescript"
				theme="vs-dark"
				defaultValue={code}
				onChange={value => setCode(value!)}
				beforeMount={handleEditorWillMount}
			/>
		</Card>
	);
};
