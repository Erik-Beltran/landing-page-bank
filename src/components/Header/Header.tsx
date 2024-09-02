"use client";
import Image from "next/image";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import { useState } from "react";

import MENU_ICON from "@icons/menu.svg";

export default function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4 md:py-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width="150"
            height="40"
            priority
          />
        </Link>
        <button
          className="block md:hidden"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <MENU_ICON />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            openMenuMobile ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-out"
              >
                <Link href={idLink} className="text-lg hover:text-secondary">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
