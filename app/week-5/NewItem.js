"use client";
import { useState } from "react";

export default function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
   // EXTRA (not required by assignment):
  // I added this to experiment with saving submitted items and rendering them below.
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category 
    };

    console.log(item);
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

     // EXTRA (not required by assignment):
    // I store the submitted item in an array so I can display a list of added items.
    setItems([...items, item]);

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
            // EXTRA (not required by assignment):
            // I added red/green background to visually show if the name is empty or filled.
            className={`w-full p-2 rounded-md h-10 border-2 dark:text-black ${
              !name
                ? "bg-red-300 border-red-600"
                : "bg-green-300 border-green-600"
            }`}
          />
        </div>

        <div className="flex gap-4">
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
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
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

       {/* EXTRA (not required by assignment):
          Live preview of the current input state for my own testing/curiosity. */}
      <div className="p-4 mt-6 rounded-lg shadow-md border border-teal-400 bg-gray-100 dark:bg-slate-700 space-y-1">
        <p className="text-lg font-semibold text-teal-600 dark:text-teal-400">
          Item Name: <span className="text-gray-800 dark:text-gray-200">{name}</span>
        </p>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          Qty: <span className="font-medium">{quantity}</span>
        </p>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          Category: <span className="italic">{category}</span>
        </p>
      </div>
      
      {/* EXTRA (not required by assignment):
          Render a list of submitted items to confirm state updates are working. */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-3">
          Grocery List
        </h3>

        <ul className="grid gap-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-4 rounded-lg shadow-md border border-teal-400 bg-gray-100 dark:bg-slate-700"
            >
              <p className="font-bold text-teal-600 dark:text-teal-400">
                {item.name}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Quantity: {item.quantity}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Category: {item.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
