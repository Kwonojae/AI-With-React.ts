import MainChoiceBtn from "./MainChoiceBtn";

export default function Home() {
  return (
    <div className=" w-full flex flex-col h-full bg-opacity-0  items-center ">
      <section
        className=" flex flex-col h-full
       w-[50%]  text-black pt-44 items-center"
      >
        <div className="flex flex-col gap-10 items-center whitespace-nowrap">
          <h1 className="text-3xl font-Gothic md:text-5xl">
            나의 하루를 분석 해보세요.
          </h1>
          <h2 className="text-xl font-Gothic md:text-3xl">
            MinD는 나의 감정을 분석하고 상담받을 수 있습니다.
          </h2>
          <h3 className="textl-xl md:text-3xl font-Gothic">
            오늘 하루 어떠셨나요?
          </h3>
          <MainChoiceBtn />
        </div>
      </section>
    </div>
  );
}
