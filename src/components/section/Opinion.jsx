import data from "@/data.json";
import { Button } from "@/components/ui/button";

const Card = ({ content }) => {
  console.log(content.image);

  return (
    <div className="grid grid-cols-1 relative rounded-[14px] cursor-pointer  bg-[url(/bgData.png)] bg-no-repeat bg-cover p-4 md:p-[24px]  lg:p-[50px] z-10">
      <div className=" pb-[38px] px-[16px] pt-[24px] mb-[24px]">
        <p className="text-center text-white">{content.text}</p>
      </div>

      <img
        src="/quote.png"
        className="absolute top-[-32px] left-[32px] w-[64px]"
      />

      <div className="flex flex-col justify-center items-center absolute bottom-[-110px] w-full">
        <div className="w-[100px] h-[100px] border-[3px] border-white rounded-[26px]">
          <img src={content.authorImage} className=" object-fill" />
        </div>
        <p className="text-[22px] font-bold">{content.author}</p>
        <p>{content.location}</p>
      </div>
    </div>
  );
};

function Opinion() {
  const { title, text, cards } = data.section6;
  return (
    <section id="opinion" className="my-[124px]">
      <div className="flex flex-col justify-center items-center gap-[28px] mb-[64px]">
        <h2 className="text-[52px] text-center">
          <span className="text-[#525FE1] font-bold">{title[0]}</span>{" "}
          {title[1]}
        </h2>
        <p className="text-[#333333] text-center">{text}</p>
      </div>

      <div className="grid grid-cols-1 gap-[48px] md:gap-[20px] relative">
        <div className="absolute top-[-37px] right-8 w-[74px] h-[74px] bg-[#FFCF59] rounded-full z-[10]"></div>
        <div className="absolute bottom-[-32px] -left-6 w-[74px] h-[74px] bg-[#FFCF59] rounded-full z-[10]"></div>
        {cards.map((element) => (
          <Card key={element.id} content={element} />
        ))}
      </div>
    </section>
  );
}

export default Opinion;
