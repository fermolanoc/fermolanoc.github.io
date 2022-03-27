import { BsArrowDownShort } from "react-icons/bs";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

function Contact() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center my-8 p-4 text-white">
      <p className="text-3xl font-bold">Get in Touch</p>
      <p className="text-slate-400">
        I am currently looking for an opportunity as a Frontend Developer
      </p>
      <p className="flex justify-center items-center font-semibold mt-4 text-teal-400">
        Say Hello{" "}
        <span>
          <BsArrowDownShort size={24} className="animate-bounce" />
        </span>{" "}
      </p>
      <div className="mt-2 flex space-x-8 items-center text-slate-400">
        <a href="https://github.com/fermolanoc" target="_blank">
          <FiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/fermolanoc/" target="_blank">
          <FiLinkedin size={24} />
        </a>
        <a href="https://twitter.com/molcadev" target="_blank">
          <FiTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/molcadev/" target="_blank">
          <FiInstagram size={24} />
        </a>
      </div>
      <div className="text-sm mt-8 text-slate-400">
        <p> Designed & built by Fernando Molano</p>
        <p className="text-slate-300">@molcadev</p>
      </div>
    </div>
  );
}

export default Contact;
