const TVFavouriteItemCard = ({
  FavouriteName,
  icon,
}: {
  FavouriteName: string;
  icon: string;
}) => {
  return (
    <div className="group relative flex flex-col rounded-xl bg-[#ffffff70] p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px] bg-[#ffffff05]" />
      <div className="relative flex flex-col gap-5">
        <div className="w-full flex justify-between items-center py-3">
          <h3 className="text-base text-center">{FavouriteName}</h3>
          <img src={icon} alt="tvicon" className="max-h-3" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default TVFavouriteItemCard;
