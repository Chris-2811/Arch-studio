import { useState } from 'react';
import logo from '@/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import hamburger from '@/assets/icons/icon-hamburger.svg';
import { useLocation } from 'react-router-dom';
import { navbarLinks } from '@/constants';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  return (
    <header className="py-8 md:py-[3.5rem]">
      <div className="absolute top-0 left-9 xl:left-16 hidden md:flex flex-col items-center gap-12">
        <div className="w-[1px] h-[104px] bg-grey-200"></div>
        <p className="text-vertical text-lg uppercase tracking-[18px] text-grey-200">
          {location === '/' ? 'Home' : location.slice(1)}
        </p>
      </div>
      <div className="myContainer flex items-center justify-between md:justify-start gap-[4.875rem]">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[77px] h-8 md:w-[6rem] md:h-10"
          />
        </NavLink>
        <nav className="hidden md:flex ">
          <ul
            role="list"
            aria-label="primary-navigation"
            className="flex items-center gap-[3.75rem] text-grey-300 text-lg font-bold"
          >
            {navbarLinks.map((link, index) => {
              const isActive = location === link.route;

              return (
                <li key={index} className={`${isActive && 'text-dark-blue'}`}>
                  <NavLink to={link.route}>{link.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 cursor-pointer md:hidden"
        >
          <img src={hamburger} alt="Open menu" />
        </div>

        {isOpen && (
          <div className="md:hidden w-[343px] bg-grey-100 absolute right-0 top-[6rem] pl-12">
            <nav className="">
              <ul
                role="list"
                aria-label="primary-navigation"
                className="flex flex-col gap-5 text-dark-blue text-[1.5rem] font-bold py-10"
              >
                <li className="leading-[1.25]">
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="leading-[1.25]">
                  <NavLink to="/About Us">About Us</NavLink>
                </li>
                <li className="leading-[1.25]">
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
