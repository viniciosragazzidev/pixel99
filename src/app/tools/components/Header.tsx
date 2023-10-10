import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div id={"home"} className="w-full h-[calc(100vh-60px)] max-sm:h-[85vh] ">
      <div className="container w-full h-full flex items-center lg:gap-20 justify-around max-sm:p-4">
        <div className=" flex flex-1 flex-col justify-center h-full max-lg:items-center dropAndFade max-lg:text-center  max-w-2xl  gap-2 text-white">
          <h1 className="title font-semibold">
            Transforme Sua Presença Online com a{" "}
            <span className="text-custom-primary">Pixel99</span>
          </h1>
          <span className="text-sm max-sm:text-s">
            Construímos identidades digitais poderosas para empresas, combinando
            criatividade com UI/UX de alta qualidade. Descubra como podemos
            elevar sua marca no mundo digital.
          </span>

          <button
            type="button"
            className="px-4 max-sm:text-xs py-2 flex items-center justify-center max-w-[180px] text-custom-background mt-2 bg-custom-primary font-bold rounded-lg text-sm"
          >
            Faça um orçamento
          </button>
        </div>
        <div className=" max-md:hidden ">
          <div className="w-full h-full max-xl:flex-1  max-lg:hidden flex items-end justify-end dropAndFade delay-500 ">
            <Image
              src="/BG.png"
              alt="logo"
              className=" object-cover"
              width={440}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
