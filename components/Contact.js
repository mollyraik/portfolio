import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#AFD6DF]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="hands typing on laptop"
                />
              </div>
              <div>
                <h2 className="py-2">Molly Raik</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time postions. Let's
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
                <form className="flex flex-col">
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2" >Name</label>
                            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2" >Phone Number</label>
                            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2" >Email</label>
                        <input type="email" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2" >Subject</label>
                        <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2" >Message</label>
                        <textarea type="text" rows={10} className="border-2 rounded-lg p-3 flex border-gray-300"/>
                    </div>
                    <button className="w-full p-4 text-gray-100 mt-4 font-semibold">Send Message</button>
                </form>
            </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href='/'>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="m-auto text-[#5651e5]" size={30} />
            </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Contact;
