import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import { footerData, socialIcons } from "./Footer.data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-40">
      <div className="justify-between md:flex">
        <div>
          <Image
            src={"/assets/logo.png"}
            width={200}
            height={40}
            alt="logo bank"
          />

          <Reveal>
            <p className="mt-5 text-primaryDark max-w-[250px]">
              A new way to make payments easily
            </p>
          </Reveal>
        </div>
        {footerData.map(({ id, links, title }) => (
          <div key={id}>
            <h4 className="mt-8 text-lg md:mt-0">
              <Reveal>{title}</Reveal>
            </h4>
            {links.map(({ id, link, name }) => (
              <Link
                key={id}
                href={link}
                className="block text-primaryDark hover:text-white cursor-pointer"
              >
                <Reveal>{name}</Reveal>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-[#3F3E45] border-[1px] my-7" />
      <div className="items-center justify-between md:flex">
        <div className="my-3">
          <Reveal>
            {`${new Date().getFullYear()} Erik Bank`} &reg; All rights Reserved.
          </Reveal>
        </div>
        <div className="flex gap-5">
          {socialIcons.map(({ icon, id, link }) => (
            <Link
              key={id}
              href={link}
              className="hover:bg-blueRadial  hover:p-2 hover:rounded-3xl transition-all duration-300 cursor-pointer "
            >
              <Image
                src={icon}
                alt="social media icon"
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
