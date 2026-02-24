"use client";
import { useState } from "react";
export default function GroceryItemForm({ onAddItem}) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const categories = ["dairy", "bakery", "produce", "meat", "canned goods", "dry goods", "household", "frozen goods", "beverages", "snacks", "other"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: crypto.randomUUID(),
      name: name,
      quantity: quantity,
      category: category 
    };

    console.log(item);
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  return (
    <div className="max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-slate-800 border-2 border-teal-500 p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400">
          Add New Item
        </h2>

        <div>
          <label htmlFor="itemName" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <input
            id="itemName"
            name="itemName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={90}
            className={`w-full p-2 rounded-md h-10 border-2 dark:text-black ${
              !name
                ? "bg-red-300 border-red-600"
                : "bg-green-300 border-green-600"
            }`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="quantity" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 rounded-md h-10 border border-teal-400 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="category" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-md h-10 border border-teal-400 dark:bg-slate-700 dark:text-white"
            >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          aria-label="Add item"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          +
        </button>
      </form>
    </div>
  );
}
