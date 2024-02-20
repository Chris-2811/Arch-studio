import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo-light.svg';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { navbarLinks } from '@/constants';
import { useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  function scrollToTop() {
    window.scrollTo(0, 0);
    navigate('/portfolio');
  }

  return (
    <footer>
      <div className="lg:myContainer">
        <div className="bg-grey-100 md:bg-transparent  flex flex-col items-center relative pb-12 md:pb-0 md:flex-row md:items-center md:justify-start">
          <div className="bg-black w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] grid place-items-center absolute -translate-y-[50%] md:-translate-y-0 md:static">
            <img src={logo} alt="logo" className="w-16" />
          </div>
          <div className="mt-[6.375rem] mb-8 md:mt-0 md:mb-0 md:bg-grey-100 md:h-[120px] xl:h-[200px] flex items-center justify-center w-[76vw] md:justify-start md:pl-10 lg:w-[644px] xxl:w-[784px]">
            <nav>
              <ul
                role="list"
                aria-label="secondary-navigation"
                className="flex flex-col  md:flex-row items-center gap-[2rem] text-grey-300 text-lg font-bold"
              >
                {navbarLinks.map((link, index) => {
                  const isActive = location === link.route;

                  return (
                    <li
                      key={index}
                      className={`${isActive && 'text-dark-blue'}`}
                    >
                      <NavLink to={link.route}>{link.title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="md:absolute right-0" onClick={scrollToTop}>
            <Button to="/portfolio">See Our Portfolio</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
