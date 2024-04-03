import "./App.css";
import { CodeEditor } from "./components/code-editor";
import { Header } from "./components/header";
import { ReviewButton } from "./components/review-button";

function App() {
	return (
		<main className="flex gap-5 flex-col items-center justify-between">
			<Header />
			<CodeEditor />
			<ReviewButton />
		</main>
	);
}

export default App;