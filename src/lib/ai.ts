import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { useAppStore } from "@/store/store";
import { systemMessage } from "./utils";

export const getCodeReview = async () => {
	const { code, setModelAnswer } = useAppStore.getState();

	const chat = new ChatOpenAI({
		openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY as string,
		streaming: true,
		maxTokens: 500,
		temperature: 0.5,
		modelName: "gpt-4-turbo-preview",
	});

	await chat.invoke(
		[new SystemMessage(systemMessage), new HumanMessage(code)],
		{
			callbacks: [
				{
					handleLLMNewToken(token: string) {
						setModelAnswer(prevState => prevState + token);
					},
				},
			],
		}
	);
};
