import { ArrowRightIcon } from '@heroicons/react/solid';

const Button = ({ children, rightArrow, solid, onClick }) => {
  return (
    <div
      className={`flex justify-center space-x-4 items-center w-full h-[55px] ${
        solid ? 'bg-[color:var(--fillColorDark)]' : ''
      } rounded-[28px] cursor-pointer select-none`}
      onClick={onClick}
    >
      <div className={`${solid ? 'text-[color:var(--fillColor)]' : ''}`}>
        {children}
      </div>
      {rightArrow && (
        <ArrowRightIcon className="w-[18px] fill-[var(--fillColor)]" />
      )}
    </div>
  );
};

export default Button;
