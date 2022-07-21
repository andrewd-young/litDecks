export default function App() {
  return (
    <div className="space-y-5">
      <h1 className="text-7xl dark:text-white">litDecks</h1>
      <p className="text-lg dark:text-slate-400">Learn by writing flashcards <b>free forever</b></p>
      <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      <button type="button" className="text-white w-auto float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Study</button>
    </div>
  );
}
