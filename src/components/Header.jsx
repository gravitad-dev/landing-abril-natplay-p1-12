import { Button } from "@/components/ui/button";
import data from "@/data.json";
import logo from "../assets/logo.png";

function Header() {
  const { pageName, links, button } = data.header;
  return (
    <header className="fixed flex w-full justify-center items-center  border-b border-gray-200/50 px-4 md:px-8 lg:px-4 xl:px-0 z-[1000] backdrop-blur-lg bg-white/50  ">
      <div className="flex justify-between items-center w-full max-w-[1200px] py-[14px] ">
        <div className="text-[22px] font-bold text-[#1C1C1C] w-[160px] md:w-[200px]">
          <a href="/">
            <img src={logo} alt={pageName[0]}  className="h-[42px]"/>
          </a>
        </div>

        <div className="flex justify-end items-center gap-[32px]">
          <ul className="justify-center hidden md:flex">
            <li className="flex gap-4  text-[16px] text-[#808080] ">
              {links.map((element, index) => (
                <a
                  key={index}
                  href={element.url}
                  className=" hover:text-[#1C1C1C]"
                >
                  {element.title}
                </a>
              ))}
            </li>
          </ul>

          <a href={button.url}>
            <Button className="bg-gradient-to-r from-[#525FE1] to-[#2E3899]  text-white px-[34px] font-semibold">
              {button.text}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
