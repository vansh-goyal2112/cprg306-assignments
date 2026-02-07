// Version A: (According to D2L rubric)

import Item from "./item";
export default function ItemList({title, items}) {
  const categories = ["dairy", "bakery", "produce", "meat", "canned goods", "dry goods", "household"];

return (
  <div className="space-y-10">
    <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 border-b-2 border-pink-300 dark:border-pink-600 pb-2">
      {title}
    </h1>

    {categories.map((cat) => (
      <section key={cat}>
        <h2 className="text-xl font-bold mb-2 capitalize">{cat}</h2>
        <ul className="flex flex-wrap gap-4">
          {items
            .filter((item) => item.category === cat)
            .map(item => (
              <Item key={item.id} {...item} />
            ))}
        </ul>
      </section>
    ))}
  </div>
);

}


// Version B: (According to week-4 assignment guide)

// import Item from "./item";
// import items from "./items.json";
// export default function ItemList() {
//   const categories = ["dairy", "bakery", "produce", "meat", "canned goods", "dry goods", "household"];

// return (
//   <div className="space-y-10">
//     {categories.map(cat => (
//       <section key={cat}>
//         <h2 className="text-xl font-bold mb-2 capitalize">{cat}</h2>
//         <ul className="flex flex-wrap gap-4">
//           {items
//             .filter(item => item.category === cat)
//             .map(item => (
//               <Item
              //   key={item.id}
              //   name={item.name}
              //   quantity={item.quantity}
              //   category={item.category}
              // />
//             ))}
//         </ul>
//       </section>
//     ))}
//   </div>
// );

// }

