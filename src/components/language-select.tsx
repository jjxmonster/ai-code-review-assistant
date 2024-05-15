import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useAppStore } from "@/store/store";

export const LanguageSelect = () => {
	const { selectedLanguage, setSelectedLanguage } = useAppStore();
	console.log(selectedLanguage);
	return (
		<div className="flex w-full max-w-5xl">
			<Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="js">JavaScript</SelectItem>
					<SelectItem value="python">Python</SelectItem>
					<SelectItem value="php">PHP</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
