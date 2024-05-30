import data from "@/data.json";
import { Button } from "@/components/ui/button";

const Card = ({ content }) => {
  console.log(content.image);

  return (
    <div className="grid grid-cols-1 relative rounded-[14px] cursor-pointer shadow-xl">
      <div className="flex justify-center w-full h-full  bg-gray-100 overflow-hidden rounded-t-[14px]">
        <img
          src={content.image}
          className="object-cover w-full max-h-[400px] object-right-top"
        />
      </div>

      <div className=" pb-[38px] px-[16px] pt-[24px]">
        <h4 className="font-semibold text-[22px] text-center">
          {content.title}
        </h4>
        <p className="text-center text-[#333]">{content.text}</p>
      </div>

      <div className="flex justify-center items-center absolute bottom-[-24px] w-full">
        <a href="#contact">
          <Button className="shadow-lg">{content.textButton}</Button>
        </a>
      </div>
    </div>
  );
};

function Programs() {
  const { title, text, cards } = data.section5;
  return (
    <section id="programs" className="mt-[124px] ">
      <div className="flex flex-col justify-center items-center gap-[28px] mb-[32px]">
        <h2 className="text-[52px] text-center">
          <span className="text-[#525FE1] font-bold">{title[0]}</span>{" "}
          {title[1]}
        </h2>
        <p className="text-[#333333] text-center">{text}</p>
      </div>

      <div className="grid grid-cols-1 gap-[48px] md:gap-[20px]">
        {cards.map((element) => (
          <Card key={element.id} content={element} />
        ))}
      </div>
    </section>
  );
}

export default Programs;
