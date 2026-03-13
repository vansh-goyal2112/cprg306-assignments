"use client";
import { useState } from "react";

export default function GroceryItemForm({ onAddItem }) {
  const initialState = { name: "", quantity: 1, category: "produce" };

  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    category: "produce",
  });

  const categories = [
    "dairy",
    "bakery",
    "produce",
    "meat",
    "canned goods",
    "dry goods",
    "household",
    "frozen goods",
    "beverages",
    "snacks",
    "other",
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...item, id: crypto.randomUUID() };
    onAddItem(newItem);

    setItem(initialState);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-slate-800 border-2 border-teal-500 p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400">
          Add New Item
        </h2>

        <div>
          <label
            htmlFor="itemName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Name
          </label>
          <input
            id="itemName"
            name="name"
            type="text"
            value={item.name}
            onChange={handleChange}
            required
            maxLength={90}
            className={`w-full p-2 rounded-md h-10 border-2 dark:text-black ${
              !item.name
                ? "bg-red-300 border-red-600"
                : "bg-green-300 border-green-600"
            }`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Quantity
            </label>

            <div className="flex items-center border border-teal-400 rounded-md overflow-hidden">

              <button
                type="button"
                disabled={item.quantity === 1}
                onClick={() =>
                  setItem((prev) => ({
                    ...prev,
                    quantity: prev.quantity - 1,
                  }))
                }
                className="px-3 py-2 bg-teal-500 hover:bg-teal-600 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                -
              </button>

              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                max="90"
                value={item.quantity}
                onChange={handleChange}
                className="w-full text-center p-2 h-10 dark:bg-slate-700 dark:text-white"
              />

              <button
                type="button"
                disabled={item.quantity === 90}
                onClick={() =>
                  setItem((prev) => ({
                    ...prev,
                    quantity: prev.quantity + 1,
                  }))
                }
                className="px-3 py-2 bg-teal-500 hover:bg-teal-600 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                +
              </button>

            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={item.category}
              onChange={handleChange}
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