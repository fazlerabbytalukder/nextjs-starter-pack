import noDataFound from "@/assets/noDataFound/no-data-found.jpg";
import Image from "next/image";
const NoDataFound = ({ message }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={noDataFound}
        alt="No Data Found"
        className="w-[200px] h-auto"
      />
      <p className="text-red-500 text-lg font-medium">{message}</p>
    </div>
  );
};

export default NoDataFound;
