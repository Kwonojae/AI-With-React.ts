import { Link } from "react-router-dom";

const MAINPAGECENTERBTN =
  "h-12 w-24 items-center justify-center font-Gothic text-black flex hover:shadow-black-400 bg-gray-200 bg-opacity-0 hover:shadow-lg duration-500 border-2 border-gray-400 rounded-full";
export default function MainChoiceBtn() {
  return (
    <div className="flex gap-4">
      <Link to="/Analysis" className={MAINPAGECENTERBTN}>
        분석 하기
      </Link>
      <Link to="/Counsel" className={MAINPAGECENTERBTN}>
        상담 하기
      </Link>
    </div>
  );
}
