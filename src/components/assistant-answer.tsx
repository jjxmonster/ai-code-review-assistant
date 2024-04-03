import { useAppStore } from "@/store/store";
import { Card } from "./ui/card";
import { parse } from "marked";

export const AssistantAnswer = () => {
	const { modelAnswer } = useAppStore();

	const createMarkup = () => {
		return { __html: parse(modelAnswer) };
	};

	return (
		<Card className="text-white bg-slate-900 w-full max-w-5xl border-0 p-10">
			<div
				className="prose-invert prose-lg prose text-start max-w-full"
				dangerouslySetInnerHTML={createMarkup()}
			/>
		</Card>
	);
};
