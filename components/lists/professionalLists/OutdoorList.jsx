import React from "react";
import ProfessionCard from "../../cards/ProfessionCard";
import { OutdoorListData } from "@/public/data/professionData";

const OutdoorList = () => {
  return (
    <div>
      <h2 className="mt-6 mb-3 text-[18px] font-[600]">Outdoor</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {OutdoorListData.map((item, index) => (
          <ProfessionCard key={index} items={item.professions} />
        ))}
      </div>
    </div>
  );
};

export default OutdoorList;
