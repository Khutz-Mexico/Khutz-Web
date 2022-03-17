export const SmallCard = (images, altimage) => {
  return (
    <div className="w-[340px] h-[340px] bg-slate-300 flex items-center justify-center text-white">
      <img src={images} alt={altimage} className="w-full" />
    </div>
  );
};
