import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-zinc-100 dark:bg-slate-900 grid place-items-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
          Add New Item
        </h1>

        <NewItem />
      </div>
    </main>
  );
}