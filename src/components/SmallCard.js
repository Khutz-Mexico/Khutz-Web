export const SmallCard = ({ imageSrc, imageAlt }) => {
  return (
    <div className="w-[340px] h-[340px] bg-slate-300 flex items-center justify-center text-white">
      <img src={imageSrc} alt={imageAlt} className="w-full" />
    </div>
  );
};
