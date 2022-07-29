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

	//call props.setLearnCounter() when enter pressed
	document.addEventListener('keypress', (event) => {
		var name = event.key;
		var code = event.code;
		// Alert the key name and key code on keydown
		if(code === "Enter") {
			props.setLearnCounter();
		}
	  }, false);

	return (
		<div className="grid grid-flow-col auto-cols-max gap-0 relative p-6 bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 h-52">
			<div className="w-48">
				<ul class="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					<li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
						Unknown <span class="float-right bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{unknown}</span>
					</li>
					<li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
						Learning <span class="float-right bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">{learning}</span>
					</li>
					<li class="py-2 px-4 w-full border-gray-200 dark:border-gray-600">
						Mastered <span class="float-right bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">{mastered}</span>
					</li>
				</ul>
			</div>
			<div className="px-5">
				<p className="dark:text-slate-400">Struggling with: </p>
			</div>
		</div>
	);
}
