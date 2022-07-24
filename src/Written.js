export default function Written(terms, count) {
  const termsArray = terms.terms;
  return (
    <a className="space-y-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 h-52">
      <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{termsArray[Math.floor(Math.random() * termsArray.length)][1]}</label>
      <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></input>
      <button href="" type="button" className="text-white w-auto float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Answer</button>
    </a>
  );
}
