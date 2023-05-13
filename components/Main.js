import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsEye, BsDownload } from 'react-icons/bs';
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2  flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-300 mt-14">
            Let's Make Something Awesome
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            Hi, I'm <span className="text-pink">Molly Raik</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-200">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 dark:text-gray-300 max-w-[70%] m-auto">
            Software developer with a background in education and a talent for
            collaboration, creative thinking, and generating diverse and
            innovative ideas.
            <span className="hidden lg:inline">
              {" "}
              Ability to break down complex topics into manageable pieces,
              making them accessible to diverse audiences.
            </span>{" "}
            <span className="hidden md:inline">
              Committed to finding workable solutions to complex problems and
              using technology to bridge the gap between communities, creating a
              more connected, equitable world through determination and
              perseverance.
            </span>
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/mollyraik/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer  hover:scale-110 hover:bg-orange ease-in duration-300 m-3">
                <FaLinkedin size={25} />
              </div>
            </a>
            <a href="https://github.com/mollyraik" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange ease-in duration-300 m-3">
                <FaGithub size={25}/>
              </div>
            </a>
            <a href="/assets/MollyRaikResume.pdf" download>
              <div className="flex flex-items-row rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-orange ease-in duration-300 m-3">
                <p className="mr-2 font-bold">Resume</p>
                <BsDownload size={25}/>
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr className="w-[75%] h-1 mx-auto bg-peach border-0 rounded md:my-10" />
    </div>
  );
};

export default Main;
