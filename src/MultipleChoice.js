import {useState} from "react";

export default function MultipleChoice(props) {
	const termsArray = props.terms;
	let answerIndex = Math.floor(props.questionSeed * termsArray.length);

	//generate an array of 3 random terms that are not at answer index
	let randomTerms = [];
	for (let i = 0; i < 3; i++) {
		let randomIndex = Math.floor(Math.random() * termsArray.length);
		while (randomIndex === answerIndex) {
			randomIndex = Math.floor(Math.random() * termsArray.length);
		}
		randomTerms.push(termsArray[randomIndex]);
	}
	randomTerms.push(termsArray[answerIndex]);

	//shuffle randomTerms
	for (let i = randomTerms.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[randomTerms[i], randomTerms[j]] = [randomTerms[j], randomTerms[i]];
	}

	return (
		<a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-5">
			<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{termsArray[answerIndex][1]}</label>
			<ul className="grid gap-6 w-full md:grid-cols-2">
				{randomTerms.map((term) => {
					return <Choice potentialAnswer={term[0]} answerIndex={answerIndex} termsArray={termsArray} key={term[0]} setLearnCounter={props.setLearnCounter}></Choice>;
				})}
				<li>
					<input checked="true" type="radio" name="choice" value="choice-big" className="peer hidden"></input>
				</li>
			</ul>
		</a>
	);
}

function Choice(props) {
	const [selected, setSelected] = useState("yes");

	const handleChange = (event) => {
		console.log(event.target.value);
		setSelected(event.target.value);
	};

	return (
		<li>
			<label className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
				{props.potentialAnswer}
				<input
					type="radio"
					name="choice"
					value="choice-big"
					className="peer"
					onChange={handleChange}
					defaultChecked={selected === "yes"}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							props.setLearnCounter();
              if(props.potentialAnswer === props.termsArray[props.answerIndex][0])
              {
                props.termsArray[props.answerIndex][2] = 1;
                console.log("correct");
              }
						}
					}}
				></input>
			</label>
		</li>
	);
}
