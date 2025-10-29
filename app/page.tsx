import Home from "./home";
import Slider from "./slider";
import Image from "next/image";

export default function homepage() {
  return (
    <div>
      <div className="relative w-full h-full">
        <Home />
        <Slider />
      </div>
    </div>
  );
}
