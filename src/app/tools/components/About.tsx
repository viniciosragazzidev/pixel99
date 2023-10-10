import Image from "next/image";
import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <div id={"about"} className="w-full min-h-[50vh] py-14 ">
      <div className="container flex flex-col  gap-4 justify-between">
        <div className="flex flex-col max-sm:text-center gap-2  py-4">
          <h3 className="text-white font-semibold flex items-center max-sm:justify-center gap-1 uppercase tracking-wide">
            {" "}
            <span className="text-xl  text-custom-primary cursor-pointer flex flex-col gap-1  hover:scale-95 transition-all">
              <AiTwotoneThunderbolt />
            </span>{" "}
            Sobre a empresa
          </h3>
          <h1 className="text-white font-semibold title2 ">
            Conheça a <span className="text-custom-primary">Pixel99</span> por
            Dentro
          </h1>
        </div>
        <div className="flex  items-center  max-lg:flex-col-reverse gap-6 w-full sm:px-10">
          <div className="image   overflow-hidden  rounded-2xl opacity-80">
            <Image
              src="/aboutImage.png"
              className=" hover:scale-110  transition-all duration-1000"
              alt="logo"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col  flex-1 gap-2 text-sm justify-center items-center  text-white">
            <div className="flex flex-col gap-2 tracking-wide max-w-lg ">
              <h3 className="self-start uppercase py-3  font-bold flex items-center gap-1">
                {" "}
                <span className="text-xl  text-custom-primary cursor-pointer flex flex-col gap-1  hover:scale-95 transition-all">
                  <AiTwotoneThunderbolt />
                </span>{" "}
                Nossa missão:
              </h3>
              <span className="text-slate-300 text-sm max-sm:text-s">
                Na <span className="text-custom-primary">Pixel99</span>, somos
                uma equipe apaixonada por transformar ideias em experiências
                digitais excepcionais. Cada projeto é uma jornada única, onde
                nossa criatividade, técnica e dedicação se encontram para criar
                identidades digitais que vão além do convencional.
              </span>
              <span className="text-slate-300">
                Em cada linha de código e design que concebemos, estamos
                comprometidos em elevar as experiências online, convidando você
                a explorar conosco este universo onde inovação e estilo se
                entrelaçam, moldando o futuro, pixel por pixel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
