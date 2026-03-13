"use client";

import { useState } from "react";
import ItemList from "./GroceryItemList";
import GroceryItemForm from "./NewGroceryItem";
import itemsData from "./grocery-items.json";
import MealIdeas from "./MealIdeas";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const [lastAdded, setLastAdded] = useState(null);

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
    setLastAdded(newItem);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,
        ""
      )
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-slate-800 p-6">

      <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
        Shopping List
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2 space-y-6">
          <GroceryItemForm onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-full md:w-1/2">
          {selectedItemName && (
            <MealIdeas ingredient={selectedItemName} />
          )}
        </div>
      </div>

      {lastAdded && (
        <div className="max-w-md mx-auto mt-4 p-4 rounded-lg bg-white dark:bg-slate-700">
          <p className="font-semibold break-words">Last Added:</p>
          <p className="break-all text-sm">{lastAdded.name} , Qty: {lastAdded.quantity} , Category: {lastAdded.category}</p>
        </div>
      )}

    </main>
  );
}