import Layout from "@/components/Layout";
import data from "@/data.json";

function Footer() {
  const { brand, about, contact, copy } = data.footer;
  const { pageName, links, button } = data.header;

  return (
    <footer className="mt-[124px] w-full min-h-[354px] bg-[#111538] text-white pt-[54px]">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-[40px] mb-[48px]">
          <div className="flex flex-col  justify-start items-start">
            <h3 className="text-[24px] font-bold mb-[32px]">{brand.title}</h3>
            <p className="font-thin">{brand.text}</p>
          </div>

          <div className="flex flex-col  justify-start items-start md:ml-12">
            <h3 className="text-[24px] font-bold mb-[32px]">{about.title}</h3>

            <ul className="">
              <li className="flex flex-col gap-[12px] ">
                {links.map((element, index) => (
                  <a key={index} href={element.url} className="font-thin">
                    {element.title}
                  </a>
                ))}
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h3 className="text-[24px] font-bold mb-[32px]">{contact.title}</h3>

            <div className="flex flex-col gap-[12px]">
              <p className="font-thin">{contact.location}</p>
              <p className="font-thin">{contact.phone}</p>
              <p className="font-thin">{contact.email}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 py-[18px] border-t border-white/20">
          <p className="font-thin text-white/60">{copy}</p>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
