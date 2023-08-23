"use client";
import { useState } from "react";

import Navbar from "./Navbar";
import MobileNavSelect from "./MobileNavSelect";
import DarkModeSelect from "./DarkModeSelect";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div
        className={`${
          isOpen ? "left-0" : "left-full"
        } fixed top-16 bg-white w-full lg:left-0 lg:relative lg:top-0`}>
        <Navbar setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
