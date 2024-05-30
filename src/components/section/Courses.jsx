import data from "@/data.json";

const Card = ({ content }) => {
  return (
    <div className="border border-[#4D4D4D/20] rounded-[14px] py-[32px] px-[16px] hover:shadow-lg  duration-150 ease-in-out cursor-pointer">
      <div className="flex justify-center w-full">
        <img src={content.icon} className="w-[90px] object-cover" />
      </div>
      <h4 className="font-semibold text-[22px] text-center">{content.title}</h4>
      <p className="text-center text-[#333]">{content.text}</p>
    </div>
  );
};

function Courses() {
  const { title, text, cards } = data.section2;
  return (
    <section id="courses" className="mt-[124px]">
      <div className="flex flex-col justify-center items-center gap-[28px] mb-[32px]">
        <h2 className="text-[52px] text-center">
          <span className="text-[#525FE1] font-bold">{title[0]}</span>{" "}
          {title[1]}
        </h2>
        <p className="text-[#333333] text-center">{text}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {cards.map((element) => (
          <Card key={element.id} content={element} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
