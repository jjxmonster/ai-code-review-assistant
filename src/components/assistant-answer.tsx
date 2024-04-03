import { useAppStore } from "@/store/store";
import { Card } from "./ui/card";

export const AssistantAnswer = () => {
	const { modelAnswer } = useAppStore();

	return (
		<Card className="p-2 text-white bg-slate-800 w-full max-w-5xl border-0">
			{modelAnswer}
		</Card>
	);
};
