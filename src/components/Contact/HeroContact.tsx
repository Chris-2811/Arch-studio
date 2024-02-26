import Rectangle from '../ui/Rectangle';

function HeroContact() {
  return (
    <section className="relative md:myContainer">
      <div className="relative h-240 w-full bg-hero-contact-mobile bg-cover md:bg-hero-contact-tablet md:h-720 lg:bg-hero-contact-desktop xl:max-w-[635px]">
        <div className="bg-white z-10 w-[343px] h-[45px] absolute bottom-0 md:hidden"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className=" bg-white pt-5 md:pt-16 pr-8 md:pr-0 pl-8 md:pl-[3.75rem] md:absolute bottom-0 right-[6rem] xxl:right-0 lg:right-[6rem] xl:pl-[11.5rem]">
        <h1 className="hidden md:block md:-translate-y-[45%] left-[8.5rem] absolute font-bold top-0 leading-[1.6666] text-[#EEEFF4] text-120  tracking-[-3px] md:left-[1.25rem]  lg:-left-2 xl:-left-[12.4rem] xxl:-left-[12rem] xl:-top-2 xl:text-[250px] xxl:leading-[0.8] xxl:tracking-[-5px] xxl:max-w-[941px]">
          Contact
        </h1>
        <div className="hidden md:block xl:mt-[6rem]">
          <Rectangle />
        </div>
        <h2 className="mb-5 md:mt-[4.5rem] md:mb-9 lg:mt-[3.5rem] ">
          Tell us about your project
        </h2>
        <p className="md:max-w-[445px]">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
    </section>
  );
}

export default HeroContact;
