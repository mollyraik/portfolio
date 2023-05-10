import Link from "next/link";
import Image from "next/image";

const Project = ({title, image, projectUrl, tech}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 dark:shadow-gray-500 bg-gray-300 dark:bg-gray-600 rounded-xl p-4 group hover:bg-gradient-to-r from-peach to to-orange">
            <Image className="rounded-xl group-hover:opacity-10" src={image} alt={title} />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">{tech}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
            </div>
    </div>
  );
}

export default Project;