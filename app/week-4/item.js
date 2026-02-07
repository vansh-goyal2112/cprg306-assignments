export default function Item({ name, quantity, category }) {
  return (
    <li 
    className="
      w-40 sm:w-44 md:w-48
      h-52 sm:h-56 md:h-64
      bg-pink-50 dark:bg-pink-900
      border-2 border-pink-200 dark:border-pink-400
      rounded-xl
      p-4
      shadow-md
      transition
      hover:shadow-lg
      hover:border-pink-300 dark:hover:border-pink-500
    "
    >
      <p className="text-base font-semibold text-pink-900 dark:text-pink-100 mb-2">
        {name}
      </p>

      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300 mb-1">
        Qty: {quantity}
      </p>

      <p className="text-sm font-medium text-pink-700 dark:text-pink-300 capitalize">
        {category}
      </p>
    </li>
  );
}
