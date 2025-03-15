import TVFavouriteItemCard from "./TVFavouriteItem";

import NBC from "/src/assets/TVIcon/NBC.png";

const ShareCardData = [
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
  {
    FavouriteName: "NBC HD",
    icon: NBC,
  },
];

const TVFavouriteCard = () => {
  return (
    <div className="RoomSection h-full min-h-[550px] bg-[#07182E] rounded-2xl relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content h-full p-4 relative z-10 flex flex-col justify-center gap-5">
        <div className="flex flex-col max-h-[500px] gap-3 p-2 overflow-y-auto">
          {ShareCardData.map((item, index) => (
            <TVFavouriteItemCard
              key={index}
              FavouriteName={item.FavouriteName}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVFavouriteCard;
