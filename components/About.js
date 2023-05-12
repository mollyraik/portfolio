import Image from "next/image";
import Link from "next/link";
import molly from "../public/assets/molly1.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 relative mt-5"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-8">
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-100 dark:shadow-gray-600 rounded-xl border-2 border-peach flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={molly}
            height={400}
            alt="molly"
            className="rounded-xl"
          ></Image>
        </div>
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-pink mt-4">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            Hey there! 👋 I'm Molly, a software developer and former teacher
            with a passion for education and technology. I've taught
            kindergarten and worked as a learning specialist, where I honed my
            skills in creating inclusive and engaging learning environments.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            After transitioning into software development, I discovered a new
            avenue for making a positive impact. From coding innovative projects
            to exploring various programming languages and technologies, I
            thrive on the dynamic nature of this field.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            As a native New Yorker, I embrace diversity
            and creativity as invaluable assets. They've shaped my collaborative
            problem-solving skills and fostered an open-minded approach to my
            work.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            As a developer, I value continuous learning, collaboration, and
            creating user-centered solutions. Drawing from my background in
            education, I aim to bridge gaps, making technology accessible and
            impactful for all. I'm excited to connect with like-minded
            developers and innovators. If you're interested in exploring my work
            or discussing shared interests, feel free to reach out or check out
            my portfolio.
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-orange dark:text-orange underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
