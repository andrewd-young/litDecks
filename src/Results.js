export default function Result(props) {
	const termsArray = props.terms;

	//count the number of 1s in the third element of every array in termsArray
	let learning = 0;
	let mastered = 0;
	let unknown = 0;
	for (let i = 0; i < termsArray.length; i++) {
		if (termsArray[i][2] === 0) {
			unknown++;
		}
		if (termsArray[i][2] === 1 || termsArray[i][2] === 2) {
			learning++;
		}
		if (termsArray[i][2] === 3) {
			mastered++;
		}
	}

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

	const motivatingMessages = ["You're going places", "It's coming along", "Let's keep moving", "Getting closer"];
	const motivatingEmojis = ["💪", "➡️", "🏃", "📈", "👍", "🤞", "👊"];

	return (
		<div className="w-full space-y-5 relative p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-56">
			<h1 className="text-3xl dark:text-white">
				<b>{motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)] + "\t" + motivatingEmojis[Math.floor(Math.random() * motivatingEmojis.length)]}</b>
			</h1>
			<div className="columns-3 w-full">
				<div class="bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 block p-6 rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-green-800 dark:text-green-900">Mastered</h5>
					<p class="font-normal text-green-800 dark:text-green-900">{mastered}</p>
				</div>
				<div class="bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-900 block p-6 rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-800 dark:text-yellow-900">Learning</h5>
					<p class="font-normal dark:text-yellow-900  text-yellow-800">{learning}</p>
				</div>
				<div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 block p-6 rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300">Unknown</h5>
					<p class="font-normal text-gray-800 dark:text-gray-300">{unknown}</p>
				</div>
			</div>
		</div>
	);
}
