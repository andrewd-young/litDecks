import {useState} from "react";
import ReactDOMServer from "react-dom/server";

export default function MultipleChoice(props) {
	const termsArray = props.terms;
	let answerIndex = Math.floor(props.questionSeed * termsArray.length);

	//generate an array of 3 random terms that are not at answer index
	let randomTerms = [];
	randomTerms.push(termsArray[answerIndex]);

	for (let i = 0; i < 3; i++) {
		let randomIndex = Math.floor(Math.random() * termsArray.length);
		while (randomIndex === answerIndex) {
			randomIndex = Math.floor(Math.random() * termsArray.length);
		}
		randomTerms.push(termsArray[randomIndex]);
	}

	randomTerms = randomTerms.filter((item, index) => randomTerms.indexOf(item) === index);
	randomTerms.length = 4;

	//shuffle randomTerms
	for (let i = randomTerms.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[randomTerms[i], randomTerms[j]] = [randomTerms[j], randomTerms[i]];
	}

	return (
		<a className="block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-5">
			<div className="p-6">
				<label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"><b>{termsArray[answerIndex][1]}</b></label>
				<ul className="grid gap-6 w-full md:grid-cols-2">
					{randomTerms.map((term) => {
						return <Choice potentialAnswer={term[0]} answerIndex={answerIndex} termsArray={termsArray} key={term[0]} setLearnCounter={props.setLearnCounter}></Choice>;
					})}
					<li>
						<input checked type="radio" name="choice" value="choice-big" className="peer hidden"></input>
					</li>
				</ul>
			</div>
		</a>
	);
}

function Choice(props) {
	const [selected, setSelected] = useState("yes");

	const handleChange = (event) => {
		setSelected(event.target.checked);
	};

	function eventAcceptor(e) {
		var code = e.code;
		if (code === "Enter") {
			document.getElementById("cardOverlay").innerHTML = "";
			document.removeEventListener("keypress", eventAcceptor, false);
		}
	}

	return (
		<li>
			<label
				className={
					selected
						? "inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						: "inline-flex justify-between items-center p-5 w-full bg-white rounded-lg border cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:text-blue-500 border-blue-600 text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
				}
			>
				{props.potentialAnswer}
				<input
					type="radio"
					name="choice"
					value="choice-big"
					className="peer"
					onChange={handleChange}
					checked={selected === "yes"}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							props.setLearnCounter();
							if (props.potentialAnswer === props.termsArray[props.answerIndex][0]) {
								setTimeout(() => {
									document.getElementById("cardOverlay").innerHTML = "";
								}, 1000);
								props.termsArray[props.answerIndex][2] = 1;
								document.getElementById("cardOverlay").innerHTML = ReactDOMServer.renderToString(
									<div className="flex absolute w-full h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
										<h1 className="text-center m-auto text-5xl text-green-500">
											<b>✅ Correct!</b>
										</h1>
									</div>
								);
							} else {
								setTimeout(() => {
									document.addEventListener("keypress", eventAcceptor, false);
								}, 1000);
								document.getElementById("cardOverlay").innerHTML = ReactDOMServer.renderToString(
									<div className="flex absolute w-full h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
										<h1 className="text-center m-auto text-5xl text-red-500">
											<b>❌ Incorrect</b>
										</h1>
										<p className="text-base dark:text-slate-400 m-auto">
											You said <b>{props.potentialAnswer}</b>
										</p>
										<p className="text-base dark:text-slate-400 m-auto">
											The correct answer was <b>{props.termsArray[props.answerIndex][0]}</b>
										</p>
									</div>
								);
							}
						}
					}}
				></input>
			</label>
		</li>
	);
}
