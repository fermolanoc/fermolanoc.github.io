import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-3 h-24 text-white">
      <div className="text-2xl font-extrabold">molcadev</div>
      <div
        className="text-lg text-slate-300 burger-menu"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <CgMenuMotion size={28} />
        {mobileMenu && (
          <div className="mobile-menu absolute top-20 right-0.5 bg-slate-700 w-full h-96 flex items-center">
            <ul className="flex flex-col h-full mx-auto items-start justify-evenly">
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
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
