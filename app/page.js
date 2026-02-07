import Link from "next/link";

export default function Page() {
  const weeklyAssignmentLinkStyle =
    "w-full max-w-xl mx-auto bg-gray-200 rounded-xl dark:bg-gray-600 mb-4 py-2 px-10 text-center";

  const weeklyAssignmentLinkTextStyle =
    "transition-colors duration-300 ease-linear hover:text-purple-600 dark:hover:text-pink-300";

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <header>
        <h1 className="bg-blue-400 rounded-xl dark:bg-purple-700 py-16 px-6 text-center transition-colors duration-300 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <nav className="p-4" aria-label="Weekly assignments">
          <ul className="flex flex-col gap-1">
            <li className={weeklyAssignmentLinkStyle}>
              <Link className={weeklyAssignmentLinkTextStyle} href="/week-2">
                Week 2 Assignment
              </Link>
            </li>
            <li  className={weeklyAssignmentLinkStyle}>
              <Link className={weeklyAssignmentLinkTextStyle} href="/week-3">
                Week 3 Assignment
              </Link>
            </li>
            <li  className={weeklyAssignmentLinkStyle}>
              <Link className={weeklyAssignmentLinkTextStyle} href="/week-4">
                Week 4 Assignment
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
