const ServiceCard = ({ title, text }) => {
  return (
    <div className="filled flex flex-col items-start justify-evenly p-10 space-y-9">
      <h1 className="secondaryColor text-base font-bold">{title}</h1>
      <p className="text-base font-semibold">{text}</p>
    </div>
  );
};

export default ServiceCard;
