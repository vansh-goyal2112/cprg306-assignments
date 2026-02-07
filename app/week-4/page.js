// Pass the data to your list component and give the component a dynamic title
// Version A:

import ItemList from "./item-list";
import items from "./items.json";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-800 p-6">
      <ItemList
        title="Shopping List"
        items={items}
      />
    </main>
  );
}






// In page.js, create a functional component named Page.
// It should return a main element wrapped around an h1 header
//  ("Shopping List") and the ItemList component. Since ItemList 
// is handling the data internally (loading the JSON), you do not 
// need to pass props to ItemList at this stage.

// Version B:

// import ItemList from "./item-list";
// import items from "./items.json";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-zinc-100 dark:bg-zinc-800 p-6">
//       <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 border-b-2 border-pink-300 dark:border-pink-600 pb-2">
//         Shopping List
//       </h1>
//       <ItemList/>
//     </main>
//   );
// }