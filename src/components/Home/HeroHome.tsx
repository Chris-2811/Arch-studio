import Button from '../ui/Button';
import { useState } from 'react';

function HeroHome() {
  const [selectedNumber, setSelectedNumber] = useState(1);

  return (
    <section className="md:myContainer">
      <div
        className={`relative px-8 md:px-[3.6125rem] lg:px-[11.875rem] pt-[7.25rem] ${
          selectedNumber === 1
            ? 'bg-paramour-mobile md:bg-paramour-tablet lg:bg-paramour-desktop'
            : selectedNumber === 2
            ? 'bg-seraph-mobile md:bg-seraph-tablet lg:bg-seraph-desktop'
            : selectedNumber === 3
            ? 'bg-federal-mobile md:bg-federal-tablet lg:bg-federal-desktop'
            : 'bg-trinity-mobile'
        } bg-paramour-mobile h-[560px] md:h-[720px] bg-cover bg-no-repeat`}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <div className="relative text-white z-10">
          {selectedNumber === 1 ? (
            <div>
              <h2 className="text-5xl text-white md:text-8xl font-bold tracking-[-1.2px] leading-none md:leading-[0.8333] lg:max-w-[544px]">
                Project Paramour
              </h2>
              <p className="mt-3 text-white mb-20 text-lg max-w-[457px] md:mb-10 lg:mb-4 h-[6rem]">
                Project made for an art museum near Southwest London. Project
                Paramour is a statement of bold, modern architecture.
              </p>
            </div>
          ) : selectedNumber === 2 ? (
            <div>
              <h2 className="text-5xl text-white  md:text-8xl font-bold tracking-[-1.2px] leading-none md:leading-[0.8333] lg:max-w-[554px]">
                Seraph Station
              </h2>
              <p className="mt-3 mb-20 max-w-[457px] text-white md:mb-10 lg:mb-4 h-[6rem]">
                The Seraph Station project challenged us to design a unique
                station that would transport people through time. The result is
                a fresh and futuristic model inspired by space stations.
              </p>
            </div>
          ) : selectedNumber === 3 ? (
            <div>
              <h2 className="text-5xl text-white md:text-8xl font-bold tracking-[-1.2px] leading-none md:leading-[0.8333] lg:max-w-[554px]">
                Federal II Tower
              </h2>
              <p className="mt-3 mb-20 max-w-[457px] text-white md:mb-10 lg:mb-4 h-[6rem]">
                A sequel theme project for a tower originally built in the
                1800s. We achieved this with a striking look of brutal
                minimalism with modern touches.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-5xl text-white md:text-8xl font-bold tracking-[-1.2px] leading-none md:leading-[0.8333] lg:max-w-[554px]">
                Trinity Bank Tower
              </h2>
              <p className="mt-3 mb-20 max-w-[457px] text-white md:mb-10 lg:mb-4 h-[6rem]">
                Trinity Bank challenged us to make a concept for a 84 story
                building located in the middle of a city with a high earthquake
                frequency. For this project we used curves to blend design and
                stability to meet our objectives.
              </p>
            </div>
          )}
          <Button to="/portfolio">See Our Portfolio</Button>
        </div>
        <div className="absolute bottom-0 -left-20 hidden xl:block">
          <ul className="flex items-center">
            <li onClick={() => setSelectedNumber(1)}>
              <Button active={selectedNumber === 1}>01</Button>
            </li>
            <li onClick={() => setSelectedNumber(2)}>
              <Button active={selectedNumber === 2}>02</Button>
            </li>
            <li onClick={() => setSelectedNumber(3)}>
              <Button active={selectedNumber === 3}>03</Button>
            </li>
            <li onClick={() => setSelectedNumber(4)}>
              <Button active={selectedNumber === 4}>04</Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
