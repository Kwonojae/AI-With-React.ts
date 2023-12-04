import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // <footer className="h-[78px] bg-green-300">
    //   <div>footer</div>
    // </footer>
    <>
      <div className="flex flex-col mx-3 bg-white rounded-lg">
        <div className="w-full ">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-7">
              <div className="flex flex-col items-center gap-6 mb-8">
                {/* 나중에 푸터에 먼가 페이지 버튼을 추가하고 싶으면 주석 해제 하고 사용 하시오 */}
                {/* <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                 
                </div> */}
                <div className="flex items-center gap-8 text-2xl">
                  <Link
                    className="hover:text-[#1877f2] hover:-translate-y-4 hover:duration-500 transition delay-200 ease-in-out"
                    to="https://www.facebook.com/?locale=ko_KR"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    className="hover:-translate-y-4 hover:text-[#1da1f2] hover:duration-500 transition delay-200 ease-in-out"
                    to="https://twitter.com/home?lang=ko"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    className="hover:-translate-y-4 hover:duration-500 hover:text-[#6cc644] transition delay-200 ease-in-out"
                    to="https://github.com/Kwonojae/AI-With-React.ts"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    className="hover:-translate-y-4 hover:duration-500 hover:text-[#fee75c] transition delay-200 ease-in-out"
                    to="https://parallel-countess-9ab.notion.site/AI-PJ-f92106d0157e4fd1ac988c866acfb7a7?pvs=4"
                  >
                    <SiNotion />
                  </Link>
                  <Link
                    className="hover:-translate-y-4 hover:duration-500 hover:text-[#e1306c] transition delay-200 ease-in-out"
                    to="https://www.instagram.com/"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="hover:-translate-y-4 hover:duration-500 hover:text-[#ff0000] transition delay-200 ease-in-out"
                    to="https://www.youtube.com/"
                  >
                    <FaYoutube />
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base font-normal leading-7 text-center text-black">
                  2023 Winter ProJect GitHub Link Click{" "}
                  <Link
                    className="underline  text-[#6cc644]"
                    to="https://github.com/Kwonojae/AI-With-React.ts"
                  >
                    FE: Kwon O Jae.
                  </Link>{" "}
                  <Link className="underline  text-[#1da1f2]" to="">
                    BE & AI: Park Jang Sun
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
