const ZoneItemBypassButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-2 bg-[#242323ad] text-white font-semibold w-full rounded-lg border-2 border-emerald-500 hover:border-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(85,247,127,0.4)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(85,247,127,0.4)] group"
    >
      <span className="flex items-center space-x-2 justify-center">
        <span className="text-xs uppercase">bypass</span>
      </span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20" />
    </button>
  );
};

export default ZoneItemBypassButton;
