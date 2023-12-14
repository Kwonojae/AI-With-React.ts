import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import UserDropDwon from "./UserDropDwon";

const LILISTSTYLE =
  "ease-in-out hover:border-b-2 text-black hover:border-black text-lg  ";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // 스크롤 위치가 100 이상이면 요소를 숨김
    console.log(scrollPosition);

    setIsHidden(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onToggle = () => {
    console.log("Button clicked");

    setNavToggle(!navToggle);
  };
  return (
    <header
      className={`sticky w-full h-[80px] top-0  z-50 bg-white
      ${isHidden ? " bg-white" : "md:bg-opacity-0"}`}
    >
      <nav className="flex h-full px-10 justify-between items-center  mx-auto z-50 ">
        <Link
          to="/"
          className={`font-Dongle text-6xl ${
            isHidden ? "text-black" : "md:text-white"
          } `}
        >
          MinD
        </Link>
        <div
          className={`md:static absolute  w-full md:min-h-fit  min-h-[10vh] left-0  ${
            navToggle ? "top-[100%]" : "top-[-1000%]"
          } justify-center md:w-auto flex w-full items-center bg-white `}
        >
          <ul className="flex md:flex-row h-44 md:h-0 flex-col md:items-center shadow-xl md:shadow-none  w-full items-center justify-center md:justify-center gap-4   ">
            <li>
              <Link className={LILISTSTYLE} to="login">
                심리 테스트
              </Link>
            </li>
            <li>
              <Link className={LILISTSTYLE} to="login">
                자존감 검사
              </Link>
            </li>
            <li>
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
