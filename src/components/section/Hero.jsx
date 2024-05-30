import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Hero() {
  const { title, text, textButton, images } = data.section1;

  return (
    <section className="w-full  md:min-h-[768px] pt-[60px]">
      <img src="vector.png" className="absolute top-[12%] left-0" />

      <div className="grid grid-cols-1  md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-[36px] min-h-[70vh] md:min-h-[768px] w-full md:w-[90%]">
          <h2 className="text-[52px]">
            {title[0]}{" "}
            <span className="text-[#525FE1] font-bold">{title[1]} </span>{" "}
            {title[2]}
          </h2>
          <p className="text-[#808080] text-[16px]">{text}</p>

          <a href="#contact">
            <Button>{textButton}</Button>
          </a>
        </div>

        {/* image */}
        <div className=" w-full h-full ">
          <div className="flex justify-end w-full h-full relative overflow-hidden">
            <img
              src={images[0]}
              className="absolute bottom-[-162px] hidden md:flex z-10 pr-8"
            />
            <img
              src={images[1]}
              className="absolute top-[5vh] hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
