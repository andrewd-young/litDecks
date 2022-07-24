import MultipleChoice from "./MultipleChoice";
import Written from "./Written";
export default function Learn(terms) {
	return (
		<div className="space-y-5">
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-blue-600 h-2.5 w-45 rounded-full"></div>
			</div>
			<p className="text-lg dark:text-white"> {JSON.stringify(terms)} </p>
		</div>
	);
}
