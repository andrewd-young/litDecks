import MultipleChoice from "./MultipleChoice";
import Written from "./Written";
import {useState} from "react";

export default function Learn(terms) {
  const termsArray = terms.terms;
	let progress = 50;
	const [wordCounter, setCounter] = useState(0);
	return (
		<div className="space-y-5 mx-auto my-auto w-3/4 h-3/4">
			<div className="mt-12 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-blue-600 h-2.5 w-45 rounded-full" style={{width: progress + "%"}}></div>
			</div>
			{Math.floor(Math.random() * 2) === 0 ? <Written terms={termsArray} count={wordCounter}/> : <MultipleChoice terms={termsArray} count={wordCounter}/>}
			{/* <p className="text-lg dark:text-white"> {JSON.stringify(termsArray)} </p> */}
		</div>
	);
}
