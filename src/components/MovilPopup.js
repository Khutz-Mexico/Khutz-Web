import { NavLink } from 'react-router-dom';

export const MovilPopup = () => {
  return (
    <div className="absolute right-0 bottom-14 w-[250px] rounded-l-2xl h-[250px] bg-[#1B212C]">
      <ul className="flex flex-col w-full h-full items-start justify-between pr-8 py-7">
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          <NavLink to="/portfolio">Portafolio</NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          <NavLink to="/services">Servicios</NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          <NavLink to="/quote">Cotizar</NavLink>
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </div>
  );
};
