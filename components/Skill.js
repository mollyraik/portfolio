import Image from "next/image";

const Skill = ({ skill, skillImg }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={skillImg}
            alt={skill}
            width="64"
            height="64"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
