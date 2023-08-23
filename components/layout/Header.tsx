"use client";
import { useState } from "react";

import Navbar from "./Navbar";
import MobileNavSelect from "./MobileNavSelect";
import DarkModeSelect from "./DarkModeSelect";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("🚀 ~ file: Header.tsx:10 ~ Header ~ isOpen:", isOpen);
  return (
    <header className='border-b'>
      {/* flex col */}
      <div className='flex flex-col'>
        <div className='flex justify-end'>
          {/* Navigation elements, dark mode */}
          {/* This elements sits on top in mobile layout */}
          <div className='lg:hidden'>
            <MobileNavSelect isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div>
            <DarkModeSelect />
          </div>
        </div>
        <div className='flex justify-center'>
          {/* Logo, site title */}
          <h1>Insects of Papua New Guinea</h1>
        </div>
      </div>
      <div className={`${isOpen ? "left-0" : "left-full"} fixed lg:left-0 top-16 bg-white w-full`}>
        <Navbar setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
