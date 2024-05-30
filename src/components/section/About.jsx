import data from "@/data.json";
import ReactPlayer from "react-player";

function About() {
  const { title, text, videoURL } = data.section3;
  return (
    <section id="about" className="mt-[124px] ">
      <div className="flex flex-col justify-center items-center gap-[28px] mb-[32px]">
        <h2 className="text-[52px] text-center">
          <span className="text-[#525FE1] font-bold">{title[0]}</span>{" "}
          {title[1]}
        </h2>
        <p className="text-[#333333] text-center">{text}</p>
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          url={videoURL}
          className="react-player"
          controls
          loop
          autoPlay
          muted
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}

export default About;
