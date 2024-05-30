import data from "@/data.json";

const Card = ({ content }) => {
  return (
    <div className="flex items-center bg-white rounded-[14px] p-[18px]">
      <div className="text-[36px] font-bold pr-[16px] border-r">
        {content.id}
      </div>
      <div className="text-[22px] font-bold pl-[16px]">{content.text}</div>
    </div>
  );
};

function Features() {
  const { title, text, cards } = data.section4;
  return (
    <section
      id="features"
      className="relative flex justify-center mt-[74px] bg-[#FFCF59] py-[65px]"
    >
      <img
        src="/ellipse.png"
        className="absolute  top-[28%] left-[-240px] md:top-[22%] lg:top-[-345px] lg:left-0 "
      />

      <img
        src="/person2.png"
        className="absolute bottom-0 left-0 hidden lg:flex"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1200px] px-4 md:px-8 lg:px-4 xl:px-0 z-10">
        {/* image */}
        <div></div>

        {/* content */}
        <div className="flex flex-col items-start gap-[24px] ">
          <h2 className="text-[52px] font-bold">{title[0]}</h2>
          <p className="text-[#333333]">{text}</p>

          <div className="flex flex-col gap-[24px] w-full">
            {cards.map((element) => (
              <Card key={element.id} content={element} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
