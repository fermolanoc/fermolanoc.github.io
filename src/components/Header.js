import { useState } from "react";
import { CgMenuMotion, CgClose } from "react-icons/cg";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const linkToSection = (sectionId) => {
    const section = document.getElementById(`${sectionId}`);
    section.scrollIntoView({ behavior: "smooth" });
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };

  return (
    <nav
      id="home"
      className="w-full flex justify-between items-center h-24 px-4 text-white border-solid border-b-2 border-slate-700"
    >
      <div className="text-2xl font-extrabold">molcadev</div>
      <div className="text-lg text-slate-300">
        {mobileMenu === false ? (
          <CgMenuMotion
            size={32}
            className="sm:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        ) : (
          <CgClose
            size={32}
            className="sm:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        )}
        {mobileMenu && (
          <div className="absolute top-20 right-0.5 bg-slate-700 w-full h-screen flex items-center z-10">
            <ul className="flex flex-col h-full mx-auto items-start justify-evenly">
              <li
                onClick={() => linkToSection("home")}
                className="cursor-pointer active:border-b-2 active:border-teal-400"
              >
                <span className="font-bold text-white">01</span>Home
              </li>
              <li
                onClick={() => linkToSection("about-us")}
                className="cursor-pointer active:border-b-2 active:border-teal-400"
              >
                <span className="font-bold text-white">02</span>About me
              </li>
              <li
                onClick={() => linkToSection("work")}
                className="cursor-pointer active:border-b-2 active:border-teal-400"
              >
                <span className="font-bold text-white">03</span>Work
              </li>
              <li
                onClick={() => linkToSection("contact")}
                className="cursor-pointer active:border-b-2 active:border-teal-400"
              >
                <span className="font-bold text-white">04</span>Contact
              </li>
            </ul>
          </div>
        )}
        {!mobileMenu && (
          <ul className="hidden sm:flex items-center space-x-8">
            <li
              onClick={() => linkToSection("home")}
              className="cursor-pointer active:border-b-2 active:border-teal-400"
            >
              <span className="font-bold text-white">01</span>Home
            </li>
            <li
              onClick={() => linkToSection("about-us")}
              className="cursor-pointer active:border-b-2 active:border-teal-400"
            >
              <span className="font-bold text-white">02</span>About me
            </li>
            <li
              onClick={() => linkToSection("work")}
              className="cursor-pointer active:border-b-2 active:border-teal-400"
            >
              <span className="font-bold text-white">03</span>Work
            </li>
            <li
              onClick={() => linkToSection("contact")}
              className="cursor-pointer active:border-b-2 active:border-teal-400"
            >
              <span className="font-bold text-white">04</span>Contact
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
