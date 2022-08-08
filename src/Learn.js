import MultipleChoice from "./MultipleChoice";
import Written from "./Written";
import Results from "./Results";
import {useState} from "react";
import {Fireworks} from "@fireworks-js/react";

let progress = 0;

export default function Learn(terms) {
	let termsArray = terms.terms;
	let [wordCounter, setCounter] = useState(1);
	let questionSeed = Math.random();
	let finishedSet = true;

	let setLearnCounter = () => {
		let sum = 0;
		for (let i = 0; i < termsArray.length; i++) {
			sum += termsArray[i][2];
		}

		setCounter(wordCounter + 1);
		progress = (sum / (termsArray.length * 3)) * 100;


		while (!finishedSet && termsArray[Math.floor(questionSeed * termsArray.length)][2] === 3) {
			questionSeed = Math.random();
		}

		questionElement = termsArray[Math.floor(Math.random() * termsArray.length)][2] === 0 ? <MultipleChoice terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} /> : <Written terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} />;
	};

	//check if all 3rd slots in termsArray are 3 and if so set finishedSet to true
	for (let i = 0; i < termsArray.length; i++) {
		if (termsArray[i][2] !== 3) {
			finishedSet = false;
		}
	}

	let questionElement = termsArray[Math.floor(Math.random() * termsArray.length)][2] === 0 ? <MultipleChoice terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} /> : <Written terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter} />;

	return (
		<div className="space-y-5 mx-auto my-auto w-3/4 h-3/4">
			{finishedSet && (
				<Fireworks
					options={{opacity: 0.5}}
					style={{
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						position: "fixed",
						zIndex: -1,
					}}
				/>
			)}
			<div className="mt-12 grid">
				<p className="text-base dark:text-slate-400 text-right">{Math.floor(progress)}%</p>
				<div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
					<div className="bg-blue-600 h-2.5 w-45 rounded-full" style={{width: progress + "%"}}></div>
				</div>
			</div>
			{/* <p className="text-base dark:text-slate-400 text-right">{wordCounter}</p> */}
			{wordCounter % 10 !== 0 && questionElement}
			{wordCounter % 10 === 0 && <Results terms={termsArray} setLearnCounter={setLearnCounter}></Results>}
			<p className="text-base dark:text-slate-400">
				Press <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Enter</kbd> to {wordCounter !== 10 ? "answer" : "continue"}
			</p>
		</div>
	);
}
