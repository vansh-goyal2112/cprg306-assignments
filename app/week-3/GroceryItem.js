export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="bg-white dark:bg-gray-800 border border-purple-800 dark:border-purple-500 rounded-xl p-4">
      <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
        {name}
      </p>

      <p className="text-sm text-green-700 dark:text-green-400">
        Quantity: {quantity}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
        Category: {category}
      </p>
    </li>
  );
}
