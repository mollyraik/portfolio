import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import formula1v1img from "../public/assets/projects/formula1v1.png";

const formula1v1 = () => {
  return (
    <>
    <Head>
        <title>Formula 1 v 1</title>
        <link rel="icon" href="/assets/favico.png" />
        <meta name="description" content="Project description for Formula 1 v 1 from Molly Raik's software developer portfolio website" />
    </Head>
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 dark:bg-black/50 z-10"></div>
        <Image
          className="absolute z-1 top-0"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "top" }}
          src={formula1v1img}
          alt="Formula 1 v 1"
        />
        <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Formula 1 v 1</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-3 lg:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-2 lg:col-span-3">
          <p className="text-xl tracking-widest uppercase text-pink">Project</p>
          <h2 className="py-4">Overview</h2>
          <p className="py-2 text-gray-500 dark:text-gray-400 font-bold">"The rule of thumb in F1 is to beat your teammate." - Nico Hülkenberg</p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Formula 1 v 1 is a web application that allows users to compare and
            analyze the performance of Formula 1 drivers within the same team
            throughout a season. Leveraging the Ergast API and
            API-Formula-1 from Rapid API, the app retrieves comprehensive data from F1
            seasons. Fomula 1 v 1 provides reliable and
            fair comparison between drivers by focusing on their performances
            relative to their teammates. As teammates drive the same car, this
            provides valuable insights into their skills, strengths, and
            weaknesses. Using the app, users can select a specific season and
            team combination to explore. They can view results of each race and
            compare how each driver within the team performed against one
            another.
          </p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Throughout the development process, I integrated the Ergast API and
            API-Formula-1 to efficiently fetch and process the necessary
            data. I also implemented intuitive user interfaces and interactive
            visualizations to enhance the user experience. Formula 1 v 1 posed
            several challenges, such as handling large datasets and ensuring
            accurate and reliable data synchronization. However, by implementing
            robust data management techniques and employing efficient
            algorithms, I was able to overcome these obstacles and deliver a
            seamless user experience. The app's impact lies in its ability to
            provide F1 enthusiasts with valuable insights
            into driver performances. By focusing on head-to-head comparisons,
            Formula 1 v 1 offers a unique perspective that enhances the
            understanding of driver dynamics within a team. Check out the live
            demo of Formula 1v1 to explore the performances of your favorite
            drivers and gain deeper insights into the world of Formula 1 racing.
          </p>
          <a href="https://mollyraik.github.io/formula1v1/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300 bg-peach">
              Live Project
            </button>
          </a>
          <a href="https://github.com/mollyraik/formula1v1" target="_blank">
            <button className="px-8 py-2 mt-4 hover:scale-110 ease-in duration-300 bg-peach">
              Github Repo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 lg:col-span-2 border-2 border-peach shadow-lg shadow-gray-400 dark:shadow-gray-600 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> jQuery
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ergast Developer API
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
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
    </>
  );
};

export default formula1v1;
