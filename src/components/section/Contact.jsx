import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Contact() {
  const { title, text, email, textButton, url } = data.section7;
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mt-[168px] min-h-[40vh]"
    >
      <div className="flex flex-col justify-center items-center gap-[28px] mb-[32px]">
        <h2 className="text-[52px] text-center">
          <span className="text-[#525FE1] font-bold">{title[0]}</span>{" "}
          {title[1]}
        </h2>
        <p className="text-[#333333] text-center">{text}</p>
      </div>

      <div className="grid grid-cols-1 ">
        {/*
        <form
          method="post"
          action={`mailto:${email}?subject=subject&message=message`}
          className="flex justify-center w-full"
        ></form>
        */}

        <a href={url} target="blank_">
          <Button className="">{textButton}</Button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
