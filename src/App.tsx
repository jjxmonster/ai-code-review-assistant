import "./App.css";
import { AssistantAnswer } from "./components/assistant-answer";
import { CodeEditor } from "./components/code-editor";
import { Header } from "./components/header";
import { LanguageSelect } from "./components/language-select";
import { ReviewButton } from "./components/review-button";

function App() {
	return (
		<main className="flex gap-5 flex-col items-center justify-between">
			<Header />
			<LanguageSelect />
			<CodeEditor />
			<ReviewButton />
			<AssistantAnswer />
		</main>
	);
}

export default App;
