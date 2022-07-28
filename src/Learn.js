import MultipleChoice from "./MultipleChoice";
import Written from "./Written";
import {useState} from "react";

let progress = 50;

export default function Learn(terms) {
	let termsArray = terms.terms;
	let [wordCounter, setCounter] = useState(0);
  let questionSeed = Math.random();

  let setLearnCounter = () => {
		setCounter(wordCounter + 1);
		questionSeed = Math.random();
    questionElement = Math.floor(Math.random() * 2) === 0 ? <Written terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} /> : <MultipleChoice terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} />;
	};

	let questionElement = Math.floor(Math.random() * 2) === 0 ? <Written terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} /> : <MultipleChoice terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} />;

	return (
		<div className="space-y-5 mx-auto my-auto w-3/4 h-3/4">
			<div className="mt-12 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-blue-600 h-2.5 w-45 rounded-full" style={{width: progress + "%"}}></div>
			</div>
			<p className="text-white">wordCount = {wordCounter}</p>
			{wordCounter != 10 && questionElement}
		</div>
	);
}