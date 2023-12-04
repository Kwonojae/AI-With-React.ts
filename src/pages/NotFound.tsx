import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
      <div className="text-3xl font-Gothic">🚫 에러 페이지 입니다.🚫</div>
      <Link className="text-3xl font-Gothic" to="/">
        🏠 홈 으로
      </Link>
    </div>
  );
}
