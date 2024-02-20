import React from 'react';
import Rectangle from '../ui/Rectangle';
import arrow from '@/assets/icons/icon-arrow-dark.svg';

function ContactDetails() {
  return (
    <section className="mt-[6.25rem]">
      <div className="myContainer">
        <Rectangle />
        <div className="xl:flex items-start xl:mt-[4.75rem] xxl:gap-[1.875rem] xl:gap-28">
          <h2 className="mt-[4.25rem] xl:mt-0 xxl:min-w-[350px] xl:leading-[0.8888]">
            Contact <br /> Details
          </h2>
          <div className="xl:flex items-start xxl:gap-[1.875rem] xxl:justify-between xl:gap-28">
            <div className="md:flex justify-between xl:block xxl:w-350">
              <div className="">
                <div className="mt-10 mb-4 text-grey-400 font-bold xl:mt-0">
                  Main Office
                </div>
                <p>Mail: achone@mail.com</p>
                <p>Address: 1892 Chenoweth Drive TN</p>
                <p>Phone: 123-456-3451</p>
              </div>
              <div className="flex items-center gap-6 mt-11 self-end mb-3">
                <p className="text-dark-blue ">View on Map</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="mt-10 md:flex justify-between xl:block xl:mt-0 xxl:w-350">
              <div className="">
                <div className="mt-10 md:mt-0 mb-4 text-grey-400 font-bold">
                  Office II
                </div>
                <p>Mail: archtwo@mail.com</p>
                <p>Address: 3399 Wines Lane TX</p>
                <p>Phone: 832-123-4321</p>
              </div>
              <div className="flex items-center gap-6 mt-11">
                <p className="text-dark-blue ">View on Map</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
