import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import Button from "./Button";
import UserDropDwon from "./UserDropDwon";

const LILISTSTYLE =
  "ease-in-out hover:font-bold hover:border-b-2 hover:opacity-70 hover:border-gray-500 hover:text-lg duration-200";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const onToggle = () => {
    console.log("Button clicked");

    setNavToggle(!navToggle);
  };
  return (
    <header className="sticky w-full h-[80px] top-0 border-b z-50 bg-white">
      <nav className="flex h-full px-10 justify-between items-center  mx-auto z-50">
        <Link to="/" className="font-Dongle text-6xl ">
          MinD
        </Link>
        <div
          className={`md:static absolute  w-full md:min-h-fit  min-h-[10vh] left-0 duration-300 ${
            navToggle ? "top-[100%]" : "top-[-1000%]"
          } justify-center md:w-auto flex w-full items-center `}
        >
          <ul className="flex md:flex-row h-44 md:h-0 flex-col md:items-center shadow-xl md:shadow-none  bg-white w-full items-center justify-center md:justify-center gap-4   ">
            <li className="h-8">
              <Link className={LILISTSTYLE} to="login">
                심리 테스트
              </Link>
            </li>
            <li className="h-8">
              <Link className={LILISTSTYLE} to="login">
                자존감 검사
              </Link>
            </li>
            <li className="h-8">
              <Link className={LILISTSTYLE} to="login">
                우울증 검사
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 justify-end ">
          {/* Header UserDropDown  */}
          <UserDropDwon dropdownRef={dropdownRef} />
          {/* 사이즈 작아졌을때 나오는 토글 버튼 */}
          {navToggle ? (
            <Button
              className="text-3xl cursor-pointer md:hidden "
              onClick={onToggle}
            >
              <IoMdClose />
            </Button>
          ) : (
            <Button
              className="text-3xl cursor-pointer md:hidden"
              onClick={onToggle}
            >
              <IoIosMenu />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
