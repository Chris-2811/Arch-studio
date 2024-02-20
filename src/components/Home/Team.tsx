import React from 'react';
import Button from '../ui/Button';

function Team() {
  return (
    <section className="md:myContainer">
      <div className="relative flex flex-col px-8 md:px-14 justify-center h-[560px] bg-image-team bg-cover lg:px-[11.875rem]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative">
          <h2 className="text-white mb-6 md:mb-7 leading-[1.0833] md:leading-[0.8888]">
            Small team, big ideas
          </h2>
          <Button to="/portfolio">About Us</Button>
        </div>
      </div>
    </section>
  );
}

export default Team;
