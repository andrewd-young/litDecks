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
			<div className="mx-auto my-auto w-4/5 h-3/4">
				<Learn terms={inputData.terms} />
			</div>
		);
	} else {
		return (
			<div className="mx-auto my-auto w-4/5 h-3/4">
				<div className="mt-12 space-y-5">
					<h1 className="text-7xl dark:text-white">
						<b>litDecks</b>
					</h1>
					<p className="text-lg dark:text-slate-400">
						Study it all right here - <b>free forever</b>
					</p>
					<div className="mx-auto w-3/4 space-y-5">
						<p className="text-base dark:text-slate-400 text-right">⬇️ Paste right from other sites to get started</p>
						<textarea
							id="message"
							value={inputData.terms}
							onChange={handleInputChange}
							rows="4"
							className="block p-2.5 w-full h-44 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Word 1&#9;&#9;Definition 1&#10;Word 2&#9;Definition 2&#10;Word 3&#9;Definition 3"
						></textarea>
            <p className="text-base dark:text-slate-400">Choose a way of learning ⬇️</p>
						<ul className="w-full items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
							<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
								<div className="flex items-center pl-3">
									<input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
									<label htmlFor="horizontal-list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
										Traditional (Learn)
									</label>
								</div>
							</li>
							<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
								<div className="flex items-center pl-3">
									<input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
									<label htmlFor="horizontal-list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
										Verb Conjugation
									</label>
								</div>
							</li>
							<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
								<div className="flex items-center pl-3">
									<input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
									<label for="horizontal-list-radio-millitary" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
										Words in Context
									</label>
								</div>
							</li>

						</ul>
            <button onClick={() => setInput({learnMode: true, terms: parseTerms(inputData.terms)})} href="#" className="float-right py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Study 🧠
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
