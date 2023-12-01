import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [user, setUsesr] = useState(true); //임시
  const [navToggle, setNavToggle] = useState(false);

  const onToggle: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Button clicked");

    setNavToggle(!navToggle);
  };
  return (
    <header className="sticky w-full h-[65px] top-0 shadow-xl z-50 bg-white">
      <nav className="flex h-full px-10 justify-between items-center  mx-auto z-50">
        <Link to="/" className="font-Dongle text-6xl ">
          MinD
        </Link>
        <div
          className={`md:static absolute duration-500  md:min-h-fit min-h-[10vh] left-0 ${
            navToggle ? "top-[100%]" : "top-[-1000%]"
          } justify-center md:w-auto flex w-full items-center `}
        >
          <ul className="flex md:flex-row flex-col md:items-center items-center md:justify-center gap-4  ">
            <li>
              <Link className="hover:text-[#fbc2eb]" to="login">
                심리 테스트
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#fbc2eb]" to="login">
                자존감 검사
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#fbc2eb]" to="login">
                우울증 검사
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <Link
              className="hover:text-[#fbc2eb]"
              onClick={() => setUsesr(false)}
              to="/"
            >
              Login
            </Link>
          ) : (
            <Link
              className="hover:text-[#fbc2eb]"
              onClick={() => setUsesr(true)}
              to="/"
            >
              LogOut
            </Link>
          )}
          {navToggle ? (
            <button
              className="text-3xl cursor-pointer md:hidden"
              onClick={onToggle}
            >
              <IoMdClose />
            </button>
          ) : (
            <button
              className="text-3xl cursor-pointer md:hidden"
              onClick={onToggle}
            >
              <IoIosMenu />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
