import Rectangle from '../ui/Rectangle';
import heritage from '@/assets/about/desktop/image-heritage.jpg';

function Heritage() {
  return (
    <section className="md:mt-[11.5rem]">
      <div className="myContainer">
        <div className="xl:flex xl:gap-14 xxl:gap-0">
          <div className="xl:w-1/2">
            <div className="mb-[4.25rem] md:mb-[3rem]">
              <Rectangle />
            </div>
            <h2 className="mb-[1.25rem] md:mb-[3.75rem]">
              Our <br /> Heritage
            </h2>
            <div className='xl:max-w-[445px] md:max-w-573"'>
              <p>
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned
                Arch into one of the most sought after boutique firms in the
                country.
              </p>
              <p className="mt-4 lg:mt-5">
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs
              </p>
              <p className="mt-4 lg:mt-5">
                Our small team of world-class professionals provides input on
                every project.
              </p>
            </div>
          </div>
          <img className="xl:w-1/2 hidden xl:block" src={heritage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Heritage;
