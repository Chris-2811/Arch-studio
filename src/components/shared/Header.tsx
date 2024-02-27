import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import hamburger from '@/assets/icons/icon-hamburger.svg';
import { useLocation } from 'react-router-dom';
import { navbarLinks } from '@/constants';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  const modalRef = useRef<HTMLDivElement | null>(null);

  function toggleModal(e: React.MouseEvent) {
    e.stopPropagation();

    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    function handleOutsideClick(e: any) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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

        <button
          onClick={toggleModal}
          className="z-40 cursor-pointer md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <img src={hamburger} alt={isOpen ? 'close menu' : 'open menu'} />
        </button>

        {isOpen && (
          <>
            <div
              ref={modalRef}
              className="md:hidden w-[343px] bg-grey-100 absolute right-0 top-[6rem] z-30 pl-12"
            >
              <nav className="">
                <ul
                  role="list"
                  aria-label="primary-navigation"
                  className="flex flex-col gap-5 text-dark-blue text-[1.5rem] font-bold py-10"
                >
                  {navbarLinks.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="leading-[1.25]"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <NavLink to={link.route}>{link.title}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="fixed top-24 left-0 w-[100vw] h-full bg-black/60 z-20"></div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
