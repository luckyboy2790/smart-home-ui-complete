import { FaPlus, FaSearch } from "react-icons/fa";

const PlayList = [
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Levitating", artist: "Dua Lipa" },
  { title: "Peaches", artist: "Justin Bieber" },
  { title: "Save Your Tears", artist: "The Weeknd" },
  { title: "Watermelon Sugar", artist: "Harry Styles" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Levitating", artist: "Dua Lipa" },
  { title: "Peaches", artist: "Justin Bieber" },
  { title: "Save Your Tears", artist: "The Weeknd" },
  { title: "Watermelon Sugar", artist: "Harry Styles" },
];

const PlayListSection = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Playlist</h3>
        <div className="p-2 border-t-neutral-600 flex gap-1">
          <div className="w-12 h-12 text-xl flex justify-center items-center hover:bg-gray-900">
            <FaPlus />
          </div>
          <div className="w-12 h-12 text-xl flex justify-center items-center hover:bg-gray-900">
            <FaSearch />
          </div>
        </div>
      </div>
      <ul className="w-full grow flex flex-col gap-5 overflow-y-auto">
        {PlayList.map((song, index) => (
          <li
            key={index}
            className="px-2 py-4 text-white bg-transparent border-b-2 border-b-gray-700 cursor-pointer hover:bg-gray-700 transition"
          >
            <p className="text-sm font-medium">{song.title}</p>
            <p className="text-xs text-gray-400">{song.artist}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayListSection;
