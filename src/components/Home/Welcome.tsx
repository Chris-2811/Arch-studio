import Rectangle from '../ui/Rectangle';
import welcomeImage from '@/assets/home/desktop/image-welcome.jpg';

function Welcome() {
  return (
    <section className="relative pt-[4.5rem] md:pt-[16.75rem] pb-[7rem] md:pb-[14.5625rem] lg:pb-[12.5rem] xl:pt-[12.375rem]">
      <div className="myContainer">
        <div className="mb-[4.25rem] md:hidden">
          <Rectangle />
        </div>
        <h1 className=" absolute font-bold top-[5.5rem] leading-[1.6666] hidden md:block text-[#EEEFF4] text-[9.5rem] tracking-[-3px] xxl:text-[250px] xxl:leading-[0.8] xxl:tracking-[-5px] xxl:top-[6.75rem] xxl:max-w-[941px]">
          Welcome
        </h1>
        <div className="xxl:pl-[11.875rem] lg:flex items-start gap-[7.8125rem]">
          <div className="xl:mt-[4.75rem]">
            <h2 className="mb-[1.25rem] md:mb-[2.6125rem] leading-[1.0833] md:leading-[0.8888]">
              Welcome to Arch Studio
            </h2>
            <p className="text-grey-400 font-medium text-lg leading-[1.33] md:max-w-[572px] xl:w-[445px]">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our! large network put us in a strong position to deliver
              exceptional results.
              <br />
              <br />
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
              <br />
              <br />
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
          <img
            src={welcomeImage}
            alt="welcome"
            className="w-[350px] h-[568px] hidden xl:block xl:pb-4 xxl:pb-0 "
          />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
