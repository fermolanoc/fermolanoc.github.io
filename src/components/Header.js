import { useState } from "react";
import { CgMenuMotion, CgClose } from "react-icons/cg";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="snap-start w-full flex justify-between items-center h-24 px-4 text-white border-solid border-b-2 border-slate-700">
      <div className="text-2xl font-extrabold">molcadev</div>
      <div
        className="text-lg text-slate-300"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu === false ? (
          <CgMenuMotion size={32} className="sm:hidden" />
        ) : (
          <CgClose size={32} className="sm:hidden" />
        )}
        {mobileMenu && (
          <div className="absolute top-20 right-0.5 bg-slate-700 w-full h-screen flex items-center">
            <ul className="flex flex-col h-full mx-auto items-start justify-evenly">
              <li>
                <a href="#home" className="font-bold text-white">
                  01
                </a>
                Home
              </li>
              <li>
                <a href="#about-me" className="font-bold text-white">
                  02
                </a>
                About me
              </li>
              <li>
                <a href="#work" className="font-bold text-white">
                  03
                </a>
                Work
              </li>
              <li>
                <a href="#contact" className="font-bold text-white">
                  04
                </a>
                Contact
              </li>
            </ul>
          </div>
        )}
        {!mobileMenu && (
          <ul className="hidden sm:flex items-center space-x-8">
            <li>
              <span className="font-bold text-white">01</span>Home
            </li>
            <li>
              <span className="font-bold text-white">02</span>Work
            </li>
            <li>
              <span className="font-bold text-white">03</span>About me
            </li>
            <li>
              <span className="font-bold text-white">04</span>Contact
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
