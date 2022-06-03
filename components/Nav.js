import Link from "next/link";

export const Nav = () => {
  return (
    <nav class="bg-gray-800 border-gray-200 p-2 sm:px-4 py-2.5 ">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 ">
        <li class="block py-2 pr-4 pl-3 mb-1.5 text-white bg-blue-700 rounded    ">
          <Link href="/">Home</Link>
        </li>
        <li class="block py-2 pr-4 pl-3 mb-1.5 text-white bg-blue-700 rounded    ">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
