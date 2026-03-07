"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const activeButtonStyle =
    "border-teal-500 bg-gray-100 text-black hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600";

  const inactiveButtonStyle =
    "border-gray-400 bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-600 dark:hover:bg-teal-500";

  const [sortBy, setSortBy] = useState("name");

  const categories = [...new Set((items ?? []).map((item) => item.category))]
    .sort((a, b) => a.localeCompare(b));

  const sortedItems = [...(items ?? [])].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="w-full p-4">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md transition duration-200 border-2
            ${
              sortBy === "name"
                ? activeButtonStyle
                : inactiveButtonStyle
            }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md transition duration-200 border-2
            ${
              sortBy === "category"
                ? activeButtonStyle
                : inactiveButtonStyle
            }`}
        >
          Sort by Category
        </button>

        <button
          type="button"
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-md transition duration-200 border-2
            ${
              sortBy === "group"
                ? activeButtonStyle
                : inactiveButtonStyle
            }`}
        >
          Group by Category
        </button>
      </div>

      <h2 className="text-2xl mt-10 mb-8 font-bold text-center text-slate-900 dark:text-white">
        Grocery List
      </h2>
      {sortBy !== "group" ? (
        <ul className="flex gap-4 overflow-x-auto scroll-smooth pb-4">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <div className="space-y-8">
          {categories.map((cat) => {
            const itemsInCategory = (items ?? [])
              .filter((item) => item.category === cat)
              .sort((a, b) => a.name.localeCompare(b.name));

            return (
              <section key={cat}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 capitalize text-slate-900 dark:text-slate-100">
                  {cat}
                </h3>
                <ul className="flex gap-4 overflow-x-auto scroll-smooth pb-4">
                  {itemsInCategory.map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
