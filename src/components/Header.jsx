import { useState } from "react";
import AnimatedUser from "./AnimatedUser";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="flex flex-col md:flex-row">
      <nav className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-5">
        <div className="flex justify-center">
          <AnimatedUser onClick={toggleMenu} />
        </div>

        <div
          className={`col-span-1 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="grid   justify-center   md:grid-cols-3 gap-4">
            <div className="bg-slate-300 rounded-full w-28 hover:w-40 hover:rounded-tl-lg transition-all">
              <p className="text-center m-2 font-pixel">Data</p>
            </div>
            <div className="bg-slate-300 rounded-bl-lg w-28 hover:w-40 hover:rounded-bl-none transition-all">
              <p className="text-center mt-2 font-pixel">Info</p>
            </div>
          </div>
        </div>

        <div
          className={`flex md:justify-end col-span-1 justify-center
            ${isMenuOpen ? "block" : "hidden md:flex"}  
            md:mr-16`}>
          <a href="#" className="text-red-500 font-pixel">
            Close / session ?
          </a>
        </div>
      </nav>
    </section>
  );
}
