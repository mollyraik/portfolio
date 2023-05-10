import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import classfolioimg from "../public/assets/projects/classfolio.png";

const classfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 dark:bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          priority
          style={{ objectFit: "cover" }}
          src={classfolioimg}
          alt="Classfolio"
        />
        <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Classfolio</h2>
          <h3>Node.js / Express / MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px mx-auto p-2 grid md:grid-cols-3 gap-8 pt-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-pink">Project</p>
          <h2 className="py-4">Overview</h2>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            excepturi corrupti poclass='dark'
            ssimus animi mollitia commodi totam dolores
            repudiandae eos? Aut quaerat ipsa aspernatur perferendis et
            reprehenderit qui fuga cum corrupti.
          </p>
          <a href="http://classfolio.herokuapp.com/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 ml-2 hover:scale-110 ease-in duration-300 bg-peach">Live Project</button>
          </a>
          <a href="https://github.com/mollyraik/classfolio" target="_blank">
            <button className="px-8 py-2 mt-4 hover:scale-110 ease-in duration-300 bg-peach">Github Repo</button>
          </a>
        </div>
        <div className="col-span-1 md:col-span-1 border-2 border-peach shadow-lg shadow-gray-400 dark:shadow-gray-600 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cloudinary
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bcrypt
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> EJS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default classfolio;
