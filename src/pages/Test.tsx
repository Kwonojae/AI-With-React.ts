import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Test() {
  return (
    <div className="flex items-center absolute top-16 justify-center  w-[240px]">
      <div className="w-full max-w-sm rounded-lg bg-white p-3 shadow-2xl divide-y divide-gray-200">
        {/* 나중에 헤더 부분 추가할때 수정  */}
        {/* <div aria-label="header" className="flex space-x-4 items-center p-4">
            <div>헤더</div>
          </div> */}
        <div aria-label="navigation" className="py-2">
          <nav className="grid gap-1">
            <Link
              to="/"
              className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <IoSettingsOutline />
              <span>Setting</span>
            </Link>
          </nav>
        </div>

        <div aria-label="footer" className="pt-2">
          <button
            type="button"
            className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <IoLogOutOutline />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
