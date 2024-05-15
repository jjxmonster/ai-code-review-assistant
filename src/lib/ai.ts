import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { useAppStore } from "@/store/store";
import { systemMessage } from "./utils";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export const getCodeReview = async () => {
	const { code, setModelAnswer, selectedLanguage } = useAppStore.getState();

	setModelAnswer("");

	const chat = new ChatOpenAI({
		openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
		streaming: true,
		maxTokens: 500,
		temperature: 0.5,
		modelName: "gpt-4-turbo-preview",
	});

	const guardRail = new ChatOpenAI({
		modelName: "gpt-3.5-turbo",
		openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
	});
	const guardPrompt = `Return 1 or 0 if the code: {code} is a valid ${selectedLanguage} code snippet`;
	const prompt = PromptTemplate.fromTemplate(guardPrompt);
	const chain = new LLMChain({ llm: guardRail, prompt });
	const { text } = await chain.call({
		code,
	});

	if (text === "1") {
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
	} else {
		setModelAnswer("Invalid code snippet");
	}
};
