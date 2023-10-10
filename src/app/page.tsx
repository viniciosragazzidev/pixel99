import Image from "next/image";
import Header from "./tools/components/Header";
import About from "./tools/components/About";
import Services from "./tools/components/Services/Services";
import { FaCircle } from "react-icons/fa6";
import Testimonial from "./tools/components/Testimonial";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <div className="w-full h-28 max-[540px]:h-16 bg-opacity-10 bg-slate-700 shadow-2xl flex items-center justify-center gap-20 max-sm:gap-4 text-3xl max-sm:text-2xl max-[540px]:text-base max-[540px]:gap-2">
        <span className=" text-white font-bold opacity-60">
          Google <span className="text-custom-primary">ADS</span>
        </span>

        <span className=" text-white font-bold opacity-60">SEO</span>

        <span className=" text-white font-bold opacity-60">
          UX/<span className="text-custom-primary">UI </span>
        </span>

        <span className=" text-white font-bold opacity-60">
          AWS <span className="text-custom-primary">Cloud</span>
        </span>
      </div>
      <About />
      <Services />
      <Testimonial />
    </main>
  );
}
