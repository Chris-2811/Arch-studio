import { Link } from 'react-router-dom';

interface FeaturedCardProps {
  bgImage: string;
  title: string;
  projectNumber: string;
}

function FeaturedCard({ title, bgImage, projectNumber }: FeaturedCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-end p-6 h-[240px] lg:h-[560px] bg-cover bg-featured-${bgImage}-mobile md:bg-featured-${bgImage}-tablet lg:bg-featured-${bgImage}-desktop`}
    >
      <div className="absolute inset-0 bg-linear-gradient-featured"></div>
      <div className="relative">
        <h3>{title}</h3>
        <Link to="/portfolio" className="text-white/75">
          View All Projects
        </Link>
      </div>
      <div className="hidden md:block absolute right-4 top-7 lg:top-11 lg:-right-[1.25rem] text-white text-opacity-50 text-250 leading-[0.8]">
        {projectNumber}
      </div>
    </div>
  );
}

export default FeaturedCard;
