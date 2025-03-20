import { IoMenuSharp } from "react-icons/io5";
import { useUser } from "../hooks/useUser";

const Navbar = () => {
  const { user } = useUser();

  return (
    <details>
      <summary className="fixed top-0 left-0 z-[990] flex h-16 w-full bg-white shadow-md hover:cursor-pointer">
        <div className="h-full w-fit text-6xl text-red-500">
          <IoMenuSharp />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={`ml-4 w-6 fill-red-500 transition-[transform] duration-75`}
        >
          <path d="m10 8-7 6V2l7 6z" />
        </svg>
        <p className="ml-8 flex items-center text-xl text-red-500">
          Hello, {user?.name}
        </p>
      </summary>
      <ul className="fixed top-16 left-0 z-10 flex list-none flex-col shadow-md">
        <li className="boder-b-0 items-center border-b-[.0625rem] border-white bg-red-500 p-2 text-xl text-white transition-all duration-200 hover:cursor-pointer hover:bg-white hover:text-red-500">
          Your submissions
        </li>
        <li className="boder-b-0 items-center border-b-[.0625rem] border-white bg-red-500 p-2 text-xl text-white transition-all duration-200 hover:cursor-pointer hover:bg-white hover:text-red-500">
          Dashboard
        </li>
        <li className="boder-b-0 items-center border-b-[.0625rem] border-white bg-red-500 p-2 text-xl text-white transition-all duration-200 hover:cursor-pointer hover:bg-white hover:text-red-500">
          Log-out
        </li>
      </ul>
    </details>
  );
};

export default Navbar;
