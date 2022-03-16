const ServiceCard = ({ title, text }) => {
  return (
    <div className="filled flex flex-col items-start justify-evenly p-[10px] md:p-10 space-y-3 md:space-y-9 cursor-default select-none duration-300 hover:scale-110">
      <h1 className="secondaryColor text-xs md:text-base font-bold">{title}</h1>
      <p className="text-xs md:text-base font-semibold">{text}</p>
    </div>
  );
};

export default ServiceCard;
