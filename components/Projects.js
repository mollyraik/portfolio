import Image from "next/image";
import dtm from "../public/assets/projects/dtm.png";
import wibl from "../public/assets/projects/wibl.png";
import classfolio from "../public/assets/projects/classfolio.png";
import formula1v1 from "../public/assets/projects/formula1v1.png";
import Link from "next/link";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#AFD6DF]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project title='Down to Match' image={dtm} projectUrl='/downtomatch' tech='React JS' />
          <Project title='Will I Be Late?' image={wibl} projectUrl='/willibelate' tech='Django/Python' />
          <Project title='Classfolio' image={classfolio} projectUrl='/classfolio' tech='Node/Express' />
          <Project title='Formula 1 v 1' image={formula1v1} projectUrl='/formula1v1' tech='jQuery/HTML/CSS' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
