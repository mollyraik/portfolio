import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../public/assets/biglogo.png";
import { useRouter } from "next/router";
// import { Link as ScrollLink } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f25f4c");
  const [navText, setNavText] = useState("white");
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      router.asPath === "/downtomatch" ||
      router.asPath === "/classfolio" ||
      router.asPath === "/formula1v1" ||
      router.asPath === "/willibelate"
    ) {
      setNavBg("#f25f4c");
      setNavText("white");
    } else {
      setNavBg("#f25f4c");
      setNavText("white");
    }
  }, [router]);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home" scroll={false}>
          <Image src={logo} alt="logo" width={100} />
        </Link>
        <div>
          <ul style={{ color: `${navText}` }} className="hidden md:flex">
            <Link href="/#home" scroll={false}>
              <li className="ml-10 text-sm uppercase hover: border-b">Home</li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover: border-b">About</li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover: border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover: border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-sm uppercase hover: border-b">
                Contact
              </li>
            </Link>
            <Link href="/assets/MollyRaikResume.pdf" target="_blank">
              <li className="ml-10 text-sm uppercase hover: border-b">
                Resume
              </li>
            </Link>

          <li className="ml-10 mr-4">
            {darkMode ? (
              <BsFillSunFill onClick={toggleDarkMode} />
            ) : (
              <BsFillMoonStarsFill onClick={toggleDarkMode} />
            )}
          </li>
          </ul>
          <ul className="flex md:hidden">
            <li onClick={handleClick} className="ml-8">
            <AiOutlineMenu size={25} />
            </li>
            <li className="ml-8 mr-4">
            {darkMode ? (
              <BsFillSunFill onClick={toggleDarkMode} size={25} />
            ) : (
              <BsFillMoonStarsFill onClick={toggleDarkMode} size={25} />
            )}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          open ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            open
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-peach p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" scroll={false}>
                <Image src={logo} width={125} alt="logo"></Image>
              </Link>
              <div
                onClick={handleClick}
                className="rounded-full shadow-lg shadow-white hover:bg-[#0f0e17] p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} color="white" />
              </div>
            </div>
            <div className="border-b border-white my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-white"></p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-white">
              <Link href="/#home" scroll={false}>
                <li onClick={() => setOpen(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={() => setOpen(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li onClick={() => setOpen(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={() => setOpen(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact" scroll={false}>
                <li onClick={() => setOpen(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <a href="/assets/MollyRaikResume.pdf" target="_blank">
                <li onClick={() => setOpen(false)} className="py-4 text-sm">
                  Resume
                </li>
              </a>
            </ul>
            <div className="pt-6">
              <p className="uppercase tracking-widest text-white font-semibold">
                Let's Connect
              </p>
              <div className="flex items-center my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/mollyraik/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-md shadow-white p-3 cursor-pointer hover:bg-[#0f0e17] hover:scale-105 ease-in duration-300 mx-3">
                    <FaLinkedin size={25} color="white" />
                  </div>
                </a>
                <a href="https://github.com/mollyraik" target="_blank">
                  <div className="rounded-full shadow-md shadow-white p-3 cursor-pointer hover:bg-[#0f0e17] hover:scale-105 ease-in duration-300 mx-3">
                    <FaGithub size={25} color="white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
