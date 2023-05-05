import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">SOMETHING COOL TO SAY</p>
                    <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#AFD6DF]">Molly</span></h1>
                    <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">Software engineer with a background in education and a talent for collaboration, creative thinking, and generating diverse and innovative ideas. Ability to break down complex topics into manageable pieces, making them accessible to diverse audiences. Committed to finding workable solutions to complex problems and using technology to bridge the gap between communities, creating a more connected, equitable world through determination and perseverance.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedin size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Main;