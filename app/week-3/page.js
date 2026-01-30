import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-purple-50 text-purple-900 dark:bg-gray-900 dark:text-gray-100 p-6 transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Shopping List
      </h1>
      <GroceryItemList />
    </main>
  );
}
