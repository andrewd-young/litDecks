import "./App.css";
import Learn from "./Learn";
import {useState} from "react";

function parseTerms(terms) {
	const termsArray = terms.split("\n");
	const termsArray2d = [];
	for (let i = 0; i < termsArray.length; i++) {
		termsArray2d.push(termsArray[i].split("\t"));
	}
	return termsArray2d;
}

function App() {
	const [inputData, setInput] = useState({learnMode: false, terms: ""});

	const handleInputChange = (event) => {
		setInput({learnMode: false, terms: event.target.value});
	};

	if (inputData.learnMode) {
		return (
			<div className="mx-auto my-auto w-3/4 h-3/4">
				<Learn terms={inputData.terms} />
			</div>
		);
	} else {
		return (
			<div className="mx-auto my-auto w-3/4 h-3/4">
				<div className="mt-12 space-y-5">
					<h1 className="text-7xl dark:text-white">
						<b>litDecks</b>
					</h1>
					<p className="text-lg dark:text-slate-400">
						Learn by writing flashcards <b>free forever</b>
					</p>
					<div className="mx-auto w-3/4 space-y-5">
						<textarea
							id="message"
							value={inputData.terms}
							onChange={handleInputChange}
							rows="4"
							className="block p-2.5 w-full h-44 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Word 1&#9;&#9;Definition 1&#10;Word 2&#9;Definition 2&#10;Word 3&#9;Definition 3"
						></textarea>
						<button onClick={() => setInput({learnMode: true, terms: parseTerms(inputData.terms)})} href="#" className="inline-flex float-right items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Study
							<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
