"use client";

import { User } from "@nextui-org/react";
import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  const testimonialsItems = [
    {
      stars: 5,
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "Jane Doe",
      job: "Designer",
      description: "Product Designer",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum quisquam adipisci inventore, pariatur voluptate, porro odio nemo magni consectetur eveniet, natus fugiat! Facere  soluta tenetur corporis amet sed quaerat.",
    },
    {
      stars: 3,
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "Jane Doe",
      job: "Designer",
      description: "Product Designer",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum quisquam adipisci inventore, pariatur voluptate, porro odio nemo magni consectetur eveniet, natus fugiat! Facere  soluta tenetur corporis amet sed quaerat.",
    },
    {
      stars: 2,
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "Jane Doe",
      job: "Designer",
      description: "Product Designer",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum quisquam adipisci inventore, pariatur voluptate, porro odio nemo magni consectetur eveniet, natus fugiat! Facere  soluta tenetur corporis amet sed quaerat.",
    },
  ];
  return (
    <div id={"testimonials"} className="w-full flex justify-center py-14">
      <div className="container w-full  max-lg:items-center flex flex-col gap-4 justify-between">
        <div className="flex flex-col max-sm:text-center gap-2  py-4">
          <h3 className="text-white font-semibold flex items-center max-sm:justify-center gap-1 uppercase tracking-wide">
            {" "}
            <span className="text-xl  text-custom-primary cursor-pointer flex flex-col gap-1  hover:scale-95 transition-all">
              <AiTwotoneThunderbolt />
            </span>{" "}
            Depoimentos dos clientes
          </h3>
          <h1 className="text-white font-semibold title2 ">
            Relatos de quem <span className="text-custom-primary">mais</span>{" "}
            importa
          </h1>
        </div>

        <div className=" grid w-full grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-center items-center content-center align-middle ">
          {testimonialsItems.map((item, index) => (
            <div
              key={index}
              className="card  w-full flex flex-col gap-4 relative p-4 border border-custom-primary border-opacity-20 rounded-lg hover:border-opacity-100 transition-all hover:scale-105 "
            >
              <header>
                <div className="stars text-custom-primary text-xs flex items-center gap-1">
                  {Array(item.stars)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index}>
                        <FaStar />
                      </span>
                    ))}
                  {Array(5 - item.stars)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="opacity-40">
                        <FaStar />
                      </span>
                    ))}
                </div>

                <span className="text-3xl absolute top-[-10px] right-[-10px] text-custom-primary">
                  <AiTwotoneThunderbolt />
                </span>
              </header>

              <div className="content justify-start flex flex-col gap-6">
                <span className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore harum quisquam adipisci inventore, pariatur voluptate,
                  porro odio nemo magni consectetur eveniet, natus fugiat!
                  Facere soluta tenetur corporis amet sed quaerat.
                </span>

                <div className="flex text-white ">
                  <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
