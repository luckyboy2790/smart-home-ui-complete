import ConfirmDialog from "../../../components/dialog/ConfirmDialog";
import { useConfirmDialog } from "../../../hooks/useConfirmDialog";
import ZoneItemCard from "./ZoneItemCard";

type TempItem = {
  securityStatus: boolean;
  itemName: string;
};

const TempItemData: TempItem[] = [
  {
    securityStatus: true,
    itemName: "Golf simulator",
  },
  {
    securityStatus: false,
    itemName: "Media room",
  },
  {
    securityStatus: true,
    itemName: "Home theater",
  },
  {
    securityStatus: true,
    itemName: "Main bedroom",
  },
  {
    securityStatus: false,
    itemName: "Main ensuite",
  },
  {
    securityStatus: true,
    itemName: "study",
  },
  {
    securityStatus: true,
    itemName: "Library",
  },
];

const ZonesSection = () => {
  const confirmDialog = useConfirmDialog();

  return (
    <div className="card w-full h-full bg-[#07182E] rounded-2xl relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content h-[calc(100vh-250)] p-4 relative z-10 flex flex-col gap-5">
        <h6 className="text-3xl">Zones</h6>
        <div className="flex flex-col gap-5 h-[calc(100vh-340px)] min-h-[500px] py-7 px-4 justify-between overflow-auto">
          {TempItemData.map((item, index) => (
            <ZoneItemCard
              key={index}
              securityStatus={item.securityStatus}
              itemName={item.itemName}
              showDialog={confirmDialog.showDialog}
            />
          ))}
        </div>
      </div>
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        options={confirmDialog.options}
        onClose={confirmDialog.closeDialog}
      />
    </div>
  );
};

export default ZonesSection;
