export default function Written(terms, count) {
	const termsArray = terms.terms;
	return (
		<div className="space-y-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 h-52">
			<label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
				{termsArray[Math.floor(Math.random() * termsArray.length)][1]}
			</label>
			<input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></input>
		</div>
	);
}
