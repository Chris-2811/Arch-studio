import { Link } from 'react-router-dom';

interface FeaturedCardProps {
  bgImage: string;
  title: string;
  projectNumber: string;
  key?: number;
}

function FeaturedCard({ title, bgImage, projectNumber }: FeaturedCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-end p-6 h-[240px] lg:h-[560px] bg-cover ${
        bgImage === '1'
          ? 'bg-featured-1-mobile md:bg-featured-1-tablet lg:bg-featured-1-desktop'
          : bgImage === '2'
          ? 'bg-featured-2-mobile md:bg-featured-2-tablet lg:bg-featured-2-desktop'
          : 'bg-featured-3-mobile md:bg-featured-3-tablet lg:bg-featured-3-desktop'
      }`}
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
