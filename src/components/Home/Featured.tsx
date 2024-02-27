import Button from '../ui/Button';
import FeaturedCard from './FeaturedCard';
import { featuredProjects } from '@/constants/featuredProjects';

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
          {featuredProjects.map((project) => {
            return (
              <FeaturedCard
                title={project.title}
                bgImage={project.bgImage}
                projectNumber={project.projectNumber}
              />
            );
          })}
        </div>
        <div className="md:hidden mt-6 w-full flex ">
          <Button
            to="/portfolio"
            fullWidth={true}
            aria-label="See all projects"
          >
            See All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
