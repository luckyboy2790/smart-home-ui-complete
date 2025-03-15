const TVControllerButtonGroup = () => {
  return (
    <div className="w-full py-4 flex justify-between gap-4">
      <button className="w-1/4 py-4 text-white rounded-xs uppercase bg-gray-600 text-xs flex justify-center cursor-pointer duration-200 active:scale-90 items-center">
        Button 1
      </button>
      <button className="w-1/4 py-4 text-white rounded-xs uppercase bg-gray-600 text-xs flex justify-center cursor-pointer duration-200 active:scale-90 items-center">
        Button 2
      </button>
      <button className="w-1/4 py-4 text-white rounded-xs uppercase bg-gray-600 text-xs flex justify-center cursor-pointer duration-200 active:scale-90 items-center">
        Button 3
      </button>
      <button className="w-1/4 py-4 text-white rounded-xs uppercase bg-gray-600 text-xs flex justify-center cursor-pointer duration-200 active:scale-90 items-center">
        Button 4
      </button>
    </div>
  );
};

export default TVControllerButtonGroup;
