import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import molly2 from "../public/assets/molly2.png";

const Contact = () => {
  const ContactForm = (
    <form
      className="flex flex-col"
      method="POST"
      name="contact-form"
      data-netlify="true"
      action="/success"
      data-netlify-honeypot="bot-field"
      // netlify
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="number" className="uppercase text-sm py-2 ">
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            className="border-2 rounded-lg p-3 flex border-gray-300 text-black dark:border-gray-700"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="email" className="uppercase text-sm py-2 ">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-2 rounded-lg p-3 flex border-gray-300  dark:border-gray-700 text-black"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="subject" className="uppercase text-sm py-2 ">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="border-2 rounded-lg p-3 flex border-gray-300 text-black dark:border-gray-700"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="message" className="uppercase text-sm py-2">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          required
          rows={10}
          className="border-2 rounded-lg p-3 flex border-gray-300 text-black dark:border-gray-700"
        />
      </div>
      <button
        type="submit"
        className="w-full p-4 text-gray-100 mt-4 font-semibold bg-pink rounded-lg hover:scale-105 ease-in duration-300"
      >
        Send Message
      </button>
    </form>
  );

  return (
    <div id="contact" className="w-full lg:h-screen pt-16">
      <div className="max-w-[1240px] m-auto px-2 pt-16 w-full">
        <p className="text-xl tracking-widest uppercase text-pink">Contact</p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="hidden md:inline lg:inline col-span-3 md:col-span-2 w-full h-full shadow-lg shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 border-2 border-peach">
            <div className="lg:p-4 h-full rounded-xl ">
              <div className="rounded-xl hover:scale-105 ease-in duration-300 border-2 border-black">
                <Image
                  src={molly2}
                  height={400}
                  alt="portrait of Molly Raik"
                  className="rounded-xl"
                />
              </div>
              <div>
                <h2 className="py-2 text-pink">Molly Raik</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time postions. Let's
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase tracking-widest pt-8">Let's Connect</p>
                <div className="flex items-center py-4">
                  <a
                    href="https://www.linkedin.com/in/mollyraik/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:bg-orange hover:scale-110 ease-in duration-300 mr-6">
                      <FaLinkedin size={25} />
                    </div>
                  </a>
                  <a href="https://github.com/mollyraik" target="_blank">
                    <div className="rounded-full shadow-md shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 hover:bg-orange ease-in duration-300">
                      <FaGithub size={25} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl lg:p-4 border-2 border-peach">
            <div className="p-4">{ContactForm}</div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home" scroll={false}>
            <div className="rounded-full shadow-lg shadow-gray-400  dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-peach">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[white]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
