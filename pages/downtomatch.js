import Image from "next/image";
import Head from "next/head";
import dtm from "../public/assets/projects/dtm.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const downToMatch = () => {
  return (
    <>
    <Head>
        <title>Down to Match</title>
        <link rel="icon" href="/assets/favico.png" />
        <meta name="description" content="Project description for Down to Match from Molly Raik's software developer portfolio website" />
    </Head>
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 dark:bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          priority
          style={{ objectFit: "cover" }}
          src={dtm}
          alt="Down to Match"
        />
        <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Down to Match</h2>
          <h3>React JS / Bootstrap / Firebase / Socket.io </h3>
        </div>
      </div>
      <div className="max-w-[1240px mx-auto p-2 grid md:grid-cols-3 lg:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-2 lg:col-span-3">
          <p className="text-xl tracking-widest uppercase text-pink">Project</p>
          <h2 className="py-4">Overview</h2>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Down to Match (DTM) is a transformative dating web app that aims to
            foster meaningful connections and move away from swipe culture. As
            the repo owner and lead developer, I played a crucial role in
            developing this innovative platform. DTM provides a refreshing
            dating experience by focusing on compatibility and deep
            relationships. Users sign up, create profiles, and complete a
            compatibility quiz. Based on their responses, DTM
            algorithmically calculates a percentage match for each user,
            enabling them to discover potential partners who align with their
            values and preferences.
          </p>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            The platform offers a user-friendly interface for browsing profiles
            and utilizes Socket.IO to facilitate seamless live chat between
            matched users. This real-time communication feature enhances user
            engagement and connection-building. As the lead developer, I
            prioritized intuitive navigation, responsive design, and robust data
            management techniques to ensure a smooth user experience. Privacy
            and data security were paramount, ensuring a safe and confidential
            environment for users to explore and connect. DTM challenges the
            norms of traditional dating apps by emphasizing compatibility and
            genuine connections. Experience a refreshing approach to online
            dating and discover meaningful connections with DTM.
          </p>
          <a href="https://downtomatch.netlify.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300 bg-peach">
              Live Project
            </button>
          </a>
          <a href="https://github.com/mollyraik/dtm-frontend" target="_blank">
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
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.io
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cloudinary
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Surveyjs.io
              </p>
              <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
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

export default downToMatch;
