"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaSquarePhone, FaSquareEnvelope, FaGhost } from "react-icons/fa6";
const SheetNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <span className="text-3xl cursor-pointer flex flex-col gap-1  hover:scale-95 transition-all">
          <span className="w-6 h-[3px] rounded-full bg-white"></span>
          <span className="w-6 h-[3px] rounded-full bg-custom-primary"></span>
          <span className="w-6 h-[3px] rounded-full bg-white"></span>
        </span>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto  border-l-0 border-b-3 border-custom-primary">
        <div className="flex flex-col w-full h-full justify-center gap-3 px-2 dropAndFade max-sm:pt-10">
          <Image src="/PIXEL99.svg" alt="logo" width={140} height={140} />

          <span className="text-s tracking-wide text-slate-400">
            Somos uma equipe criativa animada por ideias únicas, focada em
            ajudar empresas a construir uma identidade excepcional através de
            UI/UX de alta qualidade.
          </span>

          <div className="flex flex-col pt-5 gap-5 dropAndFade">
            <span className=" text-sm flex items-center text-white">
              <span className="text-custom-primary">
                <AiTwotoneThunderbolt />
              </span>
              Fale com a gente
            </span>

            <div className="flex text-white items-center gap-3">
              <span className="text-custom-primary text-2xl">
                <FaSquarePhone />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">Telefone:</span>
                <span className="text-sm">+55 (11) 99999-9999</span>
              </div>
            </div>
            <div className="flex text-white items-center gap-3">
              <span className="text-custom-primary text-2xl">
                <FaSquareEnvelope />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">Email:</span>
                <span className="text-sm">contatopixel99@gmail.com</span>
              </div>
            </div>
            <div className="flex text-white items-center gap-3">
              <span className="text-custom-primary text-2xl">
                <FaGhost />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">Socias:</span>
                <span className="text-sm">@pixel99</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetNavbar;
