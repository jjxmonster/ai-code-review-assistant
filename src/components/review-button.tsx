import { getCodeReview } from "@/lib/ai";
import { Button } from "./ui/button";

export const ReviewButton = () => {
	return (
		<Button onClick={getCodeReview} variant="secondary">
			Get Code Review
		</Button>
	);
};
