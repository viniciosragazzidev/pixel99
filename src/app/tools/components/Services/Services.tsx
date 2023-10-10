"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import {
  FaDatabase,
  FaMobileScreenButton,
  FaSpaceAwesome,
} from "react-icons/fa6";

const Services = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const itemsServices = [
    {
      name: "Landing Pages",
      desc: "Design e desenvolvimento de landing pages envolventes e otimizadas para conversões, criadas sob medida para atender aos objetivos",
      icon: <FaSpaceAwesome />,
      image: "/services1.jpg",
    },
    {
      name: "Sites Responsivos",
      desc: "Construção de sites modernos e responsivos, garantindo uma experiência consistente e intuitiva em diferentes dispositivos, desde desktops até dispositivos móveis.",
      icon: <FaMobileScreenButton />,
      image: "/services2.jpg",
    },
    {
      name: "Sistemas Web",
      desc: "Criação de sistemas web sob medida para atender às necessidades específicas do seu negócio, desde plataformas de gerenciamento interno até sistemas mais complexos.",
      icon: <FaDatabase />,
      image: "/services3.jpg",
    },
  ];

  return (
    <div id={"services"} className="w-full flex justify-center py-14">
      <div className="container flex flex-col  gap-4 justify-between">
        <div className="flex flex-col max-sm:text-center gap-2  py-4">
          <h3 className="text-white font-semibold flex items-center gap-1 uppercase tracking-wide">
            {" "}
            <span className="text-xl  text-custom-primary cursor-pointer flex flex-col gap-1  hover:scale-95 transition-all">
              <AiTwotoneThunderbolt />
            </span>{" "}
            Nossos serviços
          </h3>
          <h1 className="text-white font-semibold title2 ">
            Soluções Digitais
            <span className="text-custom-primary"> sob Medida</span>
          </h1>
        </div>

        <div className="content flex  justify-center items-center gap-14 max-md:flex-col">
          <div className="flex flex-col gap-10">
            {itemsServices.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setCurrentIndex(index)}
                className="flex max-[520px]:flex-col text-white items-center max-w-xl gap-6"
              >
                <span className="text-custom-primary text-5xl">
                  {item.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold"> {item.name}</h4>
                  <span className="text-sm max-sm:text-s">{item.desc}</span>
                </div>

                <span
                  className={`border border-custom-primary max-[520px]:hidden ${
                    currentIndex === index
                      ? "bg-custom-primary text-custom-background"
                      : "text-white "
                  } transition-all block p-[6px] font-bold	 px-2 rounded-full text-sm`}
                >
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="imageArea overflow-hidden w-full h-full    max-w-[500px] max-h-[500px] after:w-full after:h-full after:bg-custom-primary max-[520px]:max-h-60">
            <Image
              src={itemsServices[currentIndex].image}
              className=" hover:scale-110  transition-all w-full h-full duration-1000 zoomOut  mb-5 opacity-80  object-cover"
              alt="logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
