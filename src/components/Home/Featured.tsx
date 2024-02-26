import Button from '../ui/Button';
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <section className=" mt-[4.5rem] mb-[8.25rem] md:mt-[13rem] md:mb-[12.5rem]">
      <div className="myContainer">
        <div className="flex items-center justify-between">
          <h2>Featured</h2>
          <div className="hidden md:block">
            <Button to="/portfolio">See All</Button>
          </div>
        </div>
        <div className="grid gap-6 lg:gap-7 mt-[2.6875rem] md:mt-[5.375rem] lg:mt-16 lg:grid-cols-3">
          <div className="relative flex flex-col justify-end p-6 h-[240px] lg:h-[560px] bg-cover bg-featured-1-mobile md:bg-featured-1-tablet lg:bg-featured-1-desktop">
            <div className="absolute inset-0 bg-linear-gradient-featured"></div>
            <div className="relative">
              <h3>Project Del Sol</h3>
              <Link to="/portfolio" className="text-white/75">
                View All Projects
              </Link>
            </div>
            <div className="hidden md:block absolute right-4 top-7 lg:top-11 lg:-right-[1.25rem] text-white text-opacity-50 text-250 leading-[0.8]">
              1
            </div>
          </div>
          <div className="relative flex flex-col justify-end p-6 h-[240px] lg:h-[560px] bg-cover bg-featured-2-mobile md:bg-featured-2-tablet lg:bg-featured-2-desktop">
            <div className="hidden md:block absolute inset-0 bg-linear-gradient-featured"></div>
            <div className="relative">
              <h3>228B Tower</h3>
              <Link to="/portfolio" className="text-white/75">
                View All Projects
              </Link>
            </div>
            <div className="hidden md:block absolute right-4 top-7 lg:top-11 lg:-right-[1.25rem] text-white text-opacity-50 text-250 leading-[0.8]">
              2
            </div>
          </div>
          <div className="relative flex flex-col justify-end p-6 h-[240px] lg:h-[560px] bg-cover bg-featured-3-mobile md:bg-featured-3-tablet lg:bg-featured-3-desktop">
            <div className="absolute inset-0 bg-linear-gradient-featured"></div>
            <div className="relative">
              <h3>Le Prototype</h3>
              <Link to="/portfolio" className="text-white/75">
                View All Projects
              </Link>
            </div>
            <div className="hidden md:block absolute right-4 top-7 lg:top-11 lg:-right-[1.25rem] text-white text-opacity-50 text-250 leading-[0.8]">
              3
            </div>
          </div>
        </div>
        <div className="md:hidden mt-6 w-full flex ">
          <Button to="/portfolio" fullWidth={true}>
            See All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
