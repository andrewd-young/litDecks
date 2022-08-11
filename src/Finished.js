export default function Finished(props) {
	const termsArray = props.terms;

	//sleep for 1 second to allow time for the user to see the result
	setTimeout(() => {
		document.addEventListener("keypress", eventAcceptor, false);
	}, 1000);

	function eventAcceptor(e) {
		var code = e.code;
		if (code === "Enter") {
			props.setLearnCounter();
			document.removeEventListener("keypress", eventAcceptor, false);
		}
	}

	const congratsMessages = ["Yay", "You did it", "Awsome", "Congrats"];
	const congratsEmojis = ["🏆", "💯", "🎉", "👏", "👏", "👌"];

	return (
		<a className="block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-5">
			<div className="py-10 flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<h1 className="space-y-5 text-center m-auto text-5xl dark:text-white">
					<b>{congratsMessages[Math.floor(Math.random() * congratsMessages.length)] +	" " + congratsEmojis[Math.floor(Math.random() * congratsEmojis.length)]}</b>
					<p className="text-base dark:text-slate-400 text-right">You successfully studied {termsArray.length} terms!</p>
				</h1>
			</div>
		</a>
	);
}
