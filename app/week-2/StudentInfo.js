import Link from "next/link";

export default function StudentInfo() {
  return (
    <>
      <p>Name: Vansh Goyal</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/vansh-goyal2112/cprg306-assignments.git" target="_blank">
          LINK TO MY GITHUB REPOSITORY
        </Link>
      </p>
    </>
  );
}