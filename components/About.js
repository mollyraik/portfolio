import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#AFD6DF]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            veniam repudiandae in dolor. Expedita ex, aliquam velit enim fugit
            fuga iste, esse earum ab itaque culpa deleniti. Dolor, quaerat.
            Quibusdam?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            debitis placeat odit autem aliquam sunt mollitia facere itaque in
            architecto corporis, recusandae eaque perferendis possimus
            repellendus, necessitatibus commodi explicabo libero!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            deserunt quasi placeat dolorem molestias! Quos beatae libero totam
            earum minima eos accusamus ipsam nemo impedit ab. Nobis incidunt
            ratione reprehenderit.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/molly.jpeg"
            width="400"
            height="400"
            alt="molly"
            className="rounded-xl"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
