"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import GroceryItemForm from "./NewItem";
import itemsData from "./items.json";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const [lastAdded, setLastAdded] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    setLastAdded(newItem);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-slate-800 p-6">

      <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
        Shopping List
      </h1>

      <GroceryItemForm onAddItem={handleAddItem} />

      <ItemList items={items} />
      {lastAdded && (
        <div className="max-w-md mx-auto mt-4 p-4 rounded-lg bg-white dark:bg-slate-700">
          <p className="font-semibold">Last Added:</p>
          <p>{lastAdded.name} , Qty: {lastAdded.quantity} , Category: {lastAdded.category}</p>
        </div>
      )}

    </main>
  );
}