import React from 'react';
import Rectangle from '../ui/Rectangle';

function HeroAbout() {
  return (
    <section className="relative mb-[4.5rem] md:myContainer">
      <div className="relative h-240 w-full bg-hero-about-mobile bg-cover md:bg-hero-about-tablet md:h-720 lg:bg-hero-about-desktop xl:max-w-[635px]">
        <div className="bg-white z-10 w-[343px] h-[45px] absolute bottom-0 md:hidden"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className=" bg-white pt-5 md:pt-16 pr-8 md:pr-0 pl-8 md:pl-[3.75rem] md:absolute bottom-0 right-[6rem] lg:right-[6rem] xl:pl-[11.5rem]">
        <h1 className="hidden md:block md:-translate-y-[45%] left-[8rem] absolute font-bold top-0 leading-[1.6666] text-[#EEEFF4] text-120  tracking-[-3px]  lg:-left-2 xl:text-[250px] xxl:leading-[0.8] xxl:tracking-[-5px] xxl:max-w-[941px]">
          About
        </h1>
        <div className="hidden md:block xl:mt-[6rem]">
          <Rectangle />
        </div>
        <h2 className="mb-5 md:mt-[4.5rem] md:mb-9 lg:mt-[3.5rem] leading-[1.0833]">
          Your team of professionals
        </h2>
        <p className="md:max-w-[445px]">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </section>
  );
}

export default HeroAbout;
