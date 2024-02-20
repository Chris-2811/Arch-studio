import React from 'react';
import jake from '@/assets/about/desktop/avatar-jake.jpg';
import thompson from '@/assets/about/desktop/avatar-thompson.jpg';
import jackson from '@/assets/about/desktop/avatar-jackson.jpg';
import maria from '@/assets/about/desktop/avatar-maria.jpg';
import linkedIn from '@/assets/icons/icon-linkedin.svg';
import twitter from '@/assets/icons/icon-twitter.svg';
import { Link } from 'react-router-dom';

const data = [
  {
    imgSrc: jake,
    imgAlt: 'Jake Richards',
    title: 'Jake Richards',
    description: 'Chief Architect',
  },
  {
    imgSrc: thompson,
    imgAlt: 'Thompson Smith',
    title: 'Thompson Smith',
    description: 'Head of Finance',
  },
  {
    imgSrc: jackson,
    imgAlt: 'Jackson Rourke',
    title: 'Jackson Rourke',
    description: 'Lead Designer',
  },
  {
    imgSrc: maria,
    imgAlt: 'Maria Simpson',
    title: 'Maria Simpson',
    description: 'Senior Architect',
  },
];

function Leaders() {
  return (
    <section className="mt-[7rem] mb-[10.75rem] md:mb-[15rem] lg:mb-[10rem]">
      <div className="myContainer xl:flex justify-between xl:gap-16">
        <h2>
          The <br /> Leaders
        </h2>
        <div className="grid mt-[3.5rem] gap-20 md:grid-cols-2  md:gap-x-3 md:gap-y-[6.375rem] lg:gap-x-[1.875rem] lg:gap-y-[4rem]  xl:mt-0">
          {data.map((item) => {
            return (
              <div>
                <div className="group relative">
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="w-full aspect-ratio-1"
                  />
                  <div className="hidden group-hover:grid absolute place-items-center inset-0 bg-transparent group-hover:bg-black/50 transition-all">
                    <div className="flex items-center gap-6">
                      <Link to="https://www.linkedin.com/">
                        <img src={linkedIn} alt="linkedIn" />
                      </Link>
                      <Link
                        to="https://twitter.com/?lang=de"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img src={twitter} alt="twitter" />
                      </Link>
                    </div>
                  </div>
                </div>

                <h3 className="text-dark-blue mt-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Leaders;
