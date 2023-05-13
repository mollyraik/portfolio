import Image from "next/image";
import Head from "next/head";
import wibl from "../public/assets/projects/wibl.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const willibelate = () => {
  return (
    <>
    <Head>
        <title>Will I Be Late?</title>
        <link rel="icon" href="/assets/favico.png" />
        <meta name="description" content="Project description for Will I Be Late from Molly Raik's software developer portfolio website" />
    </Head>
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 dark:bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          priority
          style={{ objectFit: "cover" }}
          src={wibl}
          alt="Will I Be Late?"
        />
        <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Will I Be Late?</h2>
          <h3>Django / Python</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-3 lg:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-2 lg:col-span-3">
          <p className="text-xl tracking-widest uppercase text-pink">Project</p>
          <h2 className="py-4">Overview</h2>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            "Will I Be Late?" is a dynamic web app that provides live, real-time
            train status alerts and upcoming train information using the MTA
            API. As the developer, I integrated the MTA API to deliver accurate
            updates to users.
          </p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Users can search for subway stops or choose specific subway lines to
            access relevant train information. The app fetches real-time data
            from the MTA API, ensuring users have the most current train
            statuses and arrival times.
          </p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Registered users can save favorite stations or lines for easy access
            to frequently used trains. This personalization feature streamlines
            checking for train updates and helps users plan their journeys
            efficiently.
          </p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            A challenge during development was parsing the GTFS protocol used by
            the MTA API. To overcome this, I utilized the MTAPI GitHub
            repository developed by Jon Thornton, which translated GTFS protocol
            buffers into JSON format, simplifying the extraction and display of
            MTA train info.
          </p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            "Will I Be Late?" offers a user-friendly interface, intuitive
            navigation, and a responsive design. Stay informed and plan your MTA
            commute effortlessly with this powerful tool.
          </p>
          <a href="http://willibelate.herokuapp.com/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300 bg-peach">
              Live Project
            </button>
          </a>
          <a href="https://github.com/mollyraik/willibelate" target="_blank">
            <button className="px-8 py-2 mt-4 hover:scale-110 ease-in duration-300 bg-peach">
              Github Repo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 lg:col-span-2 border-2 border-peach shadow-lg shadow-gray-400 dark:shadow-gray-600 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600  dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600  dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600  dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600  dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostrgreSQL
              </p>
              <p className="text-gray-600  dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MTA API
              </p>
              <p className="text-gray-600  dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flask
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

export default willibelate;
