import { portfolioImages } from '@/constants';

function Gallery() {
  return (
    <section className="mb-[8.25rem] mt-16 md:mt-0 md:mb-[12.5rem] lg:mb-[10rem]">
      <div className="grid gap-6 lg:grid-cols-2  xxl:grid-cols-3 ">
        {portfolioImages.map((item, index) => (
          <div key={index} className="relative ">
            <div className="absolute inset-0 bg-linear-gradient-featured"></div>
            <picture>
              <source media="(min-width: 1440px)" srcSet={item.desktop} />
              <source media="(min-width: 768px)" srcSet={item.tablet} />
              <img
                src={item.mobile}
                alt={item.title}
                className="w-full h-[240px] xxl:h-560"
              />
            </picture>
            <div className="absolute bottom-6 left-6 ">
              <h3 className="text-white font-bold text-2xl">{item.title}</h3>
              <p className="text-white opacity-75 text-lg">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
