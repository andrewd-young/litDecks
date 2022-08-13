import "./App.css";
import Learn from "./Learn";
import Logo from "./Logo";
import {useState} from "react";
import ReactDOMServer from "react-dom/server";

function parseTerms(terms) {
	const termsArray = terms.split("\n");
	const termsArray2d = [];
	for (let i = 0; i < termsArray.length; i++) {
		termsArray2d.push(termsArray[i].split("\t"));
		termsArray2d[i].push(0);
	}
	return termsArray2d;
}

function App() {
	const [inputData, setInput] = useState({learnMode: false, submittedSet: false, terms: ""});

	const handleInputChange = (event) => {
		setInput({learnMode: false, submittedSet: false, terms: event.target.value});
	};

	const setAppInput = (object) => {
		setInput(object);
	};

	return (
		<div className="relative mx-auto flex flex-col min-h-screen w-4/5">
			{!inputData.learnMode ? (
				<div className="mt-12 space-y-5">
					<div className="relative">
						<Logo className="absolute bottom-0 h-16 float-left mr-5"></Logo>
						<h1 className="text-7xl dark:text-white ml-20">
							<b>toLearned</b>
						</h1>
					</div>
					<p className="text-lg dark:text-slate-400">
						Study it all right here - <b>free forever</b>
					</p>
					{!inputData.submittedSet ? (
						<div className="mx-auto w-3/4 space-y-5">
							<p className="text-base dark:text-slate-400 text-right">⬇️ Paste right from other sites to get started</p>
							<div id="emptyAlert"></div>
							<div className="relative">
								<div id="placeholderOverlay" className="w-full h-full p-2.5 absolute pointer-events-none">
									{inputData.terms === "" && (
										<p className="text-sm text-gray-400">
											Word 1&emsp;Definition 1<br></br>Word 2&emsp;Definition 2<br></br>Word 3&emsp;Definition 3
										</p>
									)}
								</div>
								<textarea
									id="message"
									value={inputData.terms}
									onChange={handleInputChange}
									rows="4"
									className="block p-2.5 w-full h-44 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									// placeholder="Word 1&#9;&#9;Definition 1&#10;Word 2&#9;Definition 2&#10;Word 3&#9;Definition 3"
								></textarea>
							</div>
							<button
								onClick={() => {
									if (parseTerms(inputData.terms)[0][0].length > 0) {
										setInput({learnMode: false, submittedSet: true, terms: parseTerms(inputData.terms)});
									} else {
										document.getElementById("emptyAlert").innerHTML = ReactDOMServer.renderToString(
											<div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
												<span class="font-medium">Hold on!</span> Make sure to add some terms first
											</div>
										);
									}
								}}
								href="#"
								className="float-right py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Study 🧠
							</button>
						</div>
					) : (
						<div className="mx-auto w-3/4 space-y-5 pb-20">
							<div className="space-x-5">
								<button
									onClick={() => {
										setInput({learnMode: true, submittedSet: true, terms: inputData.terms});
									}}
									href="#"
									className="py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Okay 👍
								</button>
								<button
									onClick={() => {
										//switch slot 0 and 1 in every slot of termsArray
										const termsArray = inputData.terms;
										for (let i = 0; i < termsArray.length; i++) {
											const temp = termsArray[i][0];
											termsArray[i][0] = termsArray[i][1];
											termsArray[i][1] = temp;
										}
										setInput({learnMode: false, submittedSet: true, terms: termsArray});
									}}
									href="#"
									className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
								>
									Switch Terms and Definitions ↔️
								</button>
							</div>
							<TermsTable terms={inputData.terms}></TermsTable>
						</div>
					)}
				</div>
			) : (
				<Learn terms={inputData.terms} setAppInput={setAppInput} />
			)}
			<footer className="absolute bottom-0 w-full p-4  md:items-center md:justify-between md:p-6 md:flex ">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022{" "}
					<a href="https://toLearned.com/" className="hover:underline">
						toLearned
					</a>
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a href="https://twitter.com/andrewdavidy" className="mr-4 hover:underline md:mr-6 ">
							Twitter
						</a>
					</li>
					<li>
						<a href="mailto:andrewy445@gmail.com" className="mr-4 hover:underline md:mr-6 ">
							Contact
						</a>
					</li>
					<li>
						<a href="https://github.com/andrewd-young/toLearned/issues/new/choose" className="hover:underline">
							Report Issue
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

function TermsTable(props) {
	const termsArray = props.terms;
	return (
		<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="py-3 px-6">
							Term
						</th>
						<th scope="col" className="py-3 px-6">
							Definition
						</th>
					</tr>
				</thead>
				<tbody>
					{termsArray.map((term, index) => (
						<tr className={index !== termsArray.length - 1 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white dark:bg-gray-800 dark:border-gray-700"}>
							<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								{term[0]}
							</th>
							<td className="py-4 px-6">{term[1]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
