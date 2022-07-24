import MultipleChoice from "./MultipleChoice";
import Written from "./Written";
export default function Learn() {
  return (
    <div className="space-y-5">
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 w-45 rounded-full"></div>
      </div>
      <MultipleChoice></MultipleChoice>
      <Written></Written>
    </div>
  );
}
