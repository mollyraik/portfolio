import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import formula1v1img from "../public/assets/projects/formula1v1.png";

const formula1v1 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          priority
          style={{ objectFit: "cover" }}
          src={formula1v1img}
          alt="Formula 1 v 1"
        />
        <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Formula 1 v 1</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            excepturi corrupti possimus animi mollitia commodi totam dolores
            repudiandae eos? Aut quaerat ipsa aspernatur perferendis et
            reprehenderit qui fuga cum corrupti.
          </p>
          <a href="https://mollyraik.github.io/formula1v1/" target="_blank">
          <button className="px-8 py-2 mt-4 mr-8">Live Project</button>
          </a>
          <a href="https://github.com/mollyraik/formula1v1" target="_blank">
          <button className="px-8 py-2 mt-4">Github Repo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> jQuery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ergast Developer API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> API-FORMULA-1, Rapid API
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

export default formula1v1;
