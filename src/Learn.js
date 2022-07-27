import MultipleChoice from "./MultipleChoice";
// import Written from "./Written";
import {useState} from "react";

let progress = 50;

export default function Learn(terms) {
	const termsArray = terms.terms;
	const [wordCounter, setCounter] = useState(0);
	let questionElement = null;
  let questionSeed = Math.random();

  const setLearnCounter = () => {setCounter(wordCounter + 1)};

	return (
		<div className="space-y-5 mx-auto my-auto w-3/4 h-3/4">
			<div className="mt-12 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-blue-600 h-2.5 w-45 rounded-full" style={{width: progress + "%"}}></div>
			</div>
			<p className="text-white">wordCount = {wordCounter}</p>
			<Written terms={termsArray} questionSeed={questionSeed} setLearnCounter={setLearnCounter}/>
		</div>
	);
}

function Written(props) {
	const termsArray = props.terms;
	const [message, setMessage] = useState("");
	let answerIndex = Math.floor(props.questionSeed * termsArray.length);

	const handleChange = (event) => {
		setMessage(event.target.value);
	};

	return (
		<div className="space-y-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 h-52">
			<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{termsArray[answerIndex][1]}</label>
			<input
				onChange={handleChange}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						props.setLearnCounter();
					}
				}}
				value={message}
				type="text"
				id="writtenInput"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder=""
			></input>
		</div>
	);
}
