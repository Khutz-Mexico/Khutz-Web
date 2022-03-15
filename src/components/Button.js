import { ArrowRightIcon } from '@heroicons/react/solid';

const Button = ({ children, rightArrow, solid, outlined, left }) => {
  return (
    <div
      className={`flex ${
        left ? 'justity-start px-0' : 'justify-center px-8'
      } items-center space-x-4 w-full h-[55px] ${
        solid ? 'bg-[color:var(--primaryColor)]' : ''
      } ${
        outlined ? 'border hover:border-gray-900' : ''
      } rounded-[28px] cursor-pointer select-none`}
    >
      <div className={solid ? 'text-[color:var(--primaryColorDark)]' : ''}>
        {children}
      </div>
      {rightArrow && (
        <ArrowRightIcon
          className={`w-[18px] ${
            solid ? 'fill-[color:var(--primaryColorDark)]' : ''
          }`}
        />
      )}
    </div>
  );
};

export default Button;
