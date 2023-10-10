"use client";
import Image from "next/image";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import SheetNavbar from "./SheetNavbar";
const NavbarTop = () => {
  const itemsMenu = [
    {
      name: "Home",
      hrf: "#home",
    },
    {
      name: "Sobre",
      hrf: "#about",
    },
    {
      name: "Serviços",
      hrf: "#services",
    },
    {
      name: "Depoimentos",
      hrf: "#testimonials",
    },
    {
      name: "Projetos",
      hrf: "#projects",
    },
    {
      name: "Contato",
      hrf: "#contact",
    },
    {
      name: "Faq",
      hrf: "#faq",
    },
  ];

  const itemsSocial = [
    {
      name: "Fb.",
      url: "https://www.facebook.com/pixel99/",
    },
    {
      name: "Ig.",
      url: "https://www.instagram.com/pixel99/",
    },
    {
      name: "Tw.",
      url: "https://twitter.com/pixel99",
    },
  ];
  const [activeItem, setActiveItem] = React.useState(0);
  return (
    <Navbar
      id="top"
      className="w-full flex items-center justify-center  text-white shadow-2xl "
    >
      <div className="flex gap-10">
        <NavbarBrand className="logo">
          <Image src="/PIXEL99.svg" alt="logo" width={100} height={100} />
        </NavbarBrand>
        <ul className="flex  text-s gap-4 max-lg:hidden">
          {itemsMenu.map((item, index) => (
            <li
              onClick={() => setActiveItem(index)}
              className={` cursor-pointer transition-all hover:#f9e5c6 ${
                activeItem === index ? "text-custom-primary font-semibold" : ""
              }`}
              key={index}
            >
              <a href={item.hrf}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex gap-1">
          {itemsSocial.map((item, index) => (
            <a
              className="hover:text-custom-primary text-xs"
              href={item.url}
              key={index}
            >
              {item.name}
            </a>
          ))}
        </div>
        <SheetNavbar />
      </div>
    </Navbar>
  );
};

export default NavbarTop;
