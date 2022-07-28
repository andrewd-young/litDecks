import {useState} from "react";

export default function Written(props) {
	const termsArray = props.terms;
	//add third element 0 to every array in termsArray
	const [message, setMessage] = useState("");
	let answerIndex = Math.floor(props.questionSeed * termsArray.length);

	const handleChange = (event) => {
		setMessage(event.target.value);
	};

	return (
		<div className="relative space-y-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 h-52">
			<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{termsArray[answerIndex][1]}</label>
			<input
				onChange={handleChange}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						props.setLearnCounter();
					}
				}}
				value={message}
				type="text"
				id="writtenInput"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder=""
        autoComplete="off"
			></input>
		</div>
	);
}
