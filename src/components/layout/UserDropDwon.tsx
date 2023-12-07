import Button from "./Button";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
import { PiUserPlus } from "react-icons/pi";

import { useCallback, useEffect, useState } from "react";

interface DropDownProps {
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const DROPDOWNNAV =
  "flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-200 rounded-md";

export default function UserDropDwon({ dropdownRef }: DropDownProps) {
  const [user, setUsesr] = useState(true); //임시
  const [userToggle, setUserToggle] = useState(false);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        // 클릭된 요소가 드롭다운 내부가 아니라면 드롭다운을 닫음
        setUserToggle(false);
      }
    },
    [dropdownRef]
  );

  useEffect(() => {
    // 컴포넌트가 마운트되면 document에 클릭 이벤트 리스너 추가
    console.log("마운트됨");

    document.addEventListener("click", handleOutsideClick);

    // 컴포넌트가 언마운트되면 클릭 이벤트 리스너 제거
    return () => {
      console.log("언마운트됨");

      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]); // 빈 배열을 전달하여 마운트 및 언마운트 시에만 실행

  const onUserToggle = () => {
    setUserToggle(!userToggle);
  };

  return (
    <div ref={dropdownRef}>
      <div className=" hover:shadow-gray-400 bg-gray-300 hover:shadow-md duration-500 border-2 border-gray-400 rounded-full">
        <Button
          className="w-24 h-11 text-3xl flex gap-2 items-center justify-center text-gray-400"
          onClick={onUserToggle}
        >
          <CiSaveDown1 />
          <FaUserCircle />
        </Button>
      </div>
      {userToggle && (
        <div className="flex items-center absolute top-16 right-10 justify-center w-[240px] ">
          <div className="w-full max-w-sm rounded-lg  p-3 shadow-2xl divide-y divide-gray-200 bg-white">
            {/* 나중에 헤더 부분 추가할때 수정  */}
            {/* <div aria-label="header" className="flex space-x-4 items-center p-4">
            <div>헤더</div>
          </div> */}
            <div aria-label="navigation" className="py-2 ">
              <nav className="grid gap-1 ">
                {user ? (
                  <>
                    <Link
                      to="/"
                      className={DROPDOWNNAV}
                      onClick={() => setUsesr(false)}
                    >
                      <IoLogInOutline />
                      <span>로그인</span>
                    </Link>
                    <Link to="/" className={DROPDOWNNAV}>
                      <PiUserPlus />
                      <span>회원가입</span>
                    </Link>
                  </>
                ) : (
                  <Link to="/mypage" className={DROPDOWNNAV}>
                    <IoSettingsOutline />
                    <span>내 정보</span>
                  </Link>
                )}
              </nav>
            </div>
            {!user && (
              <div aria-label="footer" className="pt-2">
                <Button
                  type="button"
                  className={DROPDOWNNAV}
                  onClick={() => setUsesr(true)}
                >
                  <IoLogOutOutline />
                  <span>로그아웃</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
