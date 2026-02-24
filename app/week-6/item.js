"use client";

import { useState } from "react";

export default function Item({ name, quantity, category }) {
  const [isVisible, setIsVisible] = useState(false);
  const maxLength = 25;
  const isLong = name.length > maxLength;
  const previewText = isLong ? name.substring(0, maxLength) + "..." : name;

  return (
    <li className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] snap-start h-52 sm:h-56 md:h-64 bg-pink-50 dark:bg-pink-900 border-2 border-pink-200 dark:border-pink-400 rounded-xl p-4 shadow-md transition hover:shadow-lg hover:border-pink-300 dark:hover:border-pink-500 overflow-hidden">
      <p className="font-bold break-words">
        {isVisible ? name : previewText}
      </p>

      {isLong ? (
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs text-pink-600 dark:text-pink-300 mt-1 hover:underline"
        >
          {isVisible ? "Show Less" : "Show More"}
        </button>
      ) : (
        ""
      )}
      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300 mb-1">
        Qty: {quantity}
      </p>

      <p className="text-sm font-medium text-pink-700 dark:text-pink-300 capitalize">
        {category}
      </p>
    </li>
  );
}
