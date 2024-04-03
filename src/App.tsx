import "./App.css";
import { AssistantAnswer } from "./components/assistant-answer";
import { CodeEditor } from "./components/code-editor";
import { Header } from "./components/header";
import { ReviewButton } from "./components/review-button";

function App() {
	return (
		<main className="flex gap-5 flex-col items-center justify-between">
			<Header />
			<CodeEditor />
			<ReviewButton />
			<AssistantAnswer />
		</main>
	);
}

export default App;
