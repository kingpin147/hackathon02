import { BadgeDemo } from "@/components/Badge";
import { ButtonDemo } from "@/components/button";
import React from "react";

const Hero = () => {
  return (
    <section>
      {/* Left Div */}
      <div>
        <BadgeDemo />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <ButtonDemo/>
      </div>

      {/* Right Div */}
      <div>hello</div>
    </section>
  );
};

export default Hero;
