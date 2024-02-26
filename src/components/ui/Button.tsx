import { Link } from 'react-router-dom';
import arrow from '@/assets/icons/icon-arrow.svg';

type ButtonProps = {
  to?: string;
  children: any;
  active?: boolean;
  fullWidth?: boolean;
};

function Button({ to, children, active, fullWidth }: ButtonProps) {
  const fullButtonWidth = fullWidth ? 'w-full' : 'max-w-max';

  if (to) {
    return (
      <Link
        to={to}
        className={`${fullButtonWidth} bg-black text-bold flex gap-6 items-center justify-center rounded-none text-lg text-center text-white pt-[1.5625rem] pb-[1.25rem] pr-8 pl-[2.125rem] hover:bg-grey-300`}
      >
        {children}
        <img src={arrow} alt="arrow-right" />
      </Link>
    );
  } else {
    return (
      <button
        className={`w-20 h-20 text-bold ${
          active
            ? 'bg-black text-white'
            : 'bg-white hover:bg-grey-200 text-grey-400'
        } rounded-none text-lg text-center text-grey-400`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
