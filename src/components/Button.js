import { ArrowRightIcon } from '@heroicons/react/solid';

const Button = ({ children, rightArrow, solid, onClick }) => {
  return (
    <div
      className={`flex justify-center items-center space-x-4 w-full h-[55px] ${
        solid ? 'bg-[color:var(--primaryColor)]' : ''
      } rounded-[28px] cursor-pointer select-none`}
      onClick={onClick}
    >
      <div className={solid ? 'text-[color:var(--primaryColorDark)]' : ''}>
        {children}
      </div>
      {rightArrow && (
        <ArrowRightIcon
          className={`w-[18px] ${solid ? 'fill-[color:var(--primaryColorDark)]' : ''}`}
        />
      )}
    </div>
  );
};

export default Button;
