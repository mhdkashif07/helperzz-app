import React from "react";
import ProfessionCard from "../../cards/ProfessionCard";
import { servicesListData } from "@/public/data/professionData";

const ServicesListMenu = () => {
  return (
    <div>
      <h2 className="mt-6 mb-3 text-[18px] font-[600]">Popular</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {servicesListData.map((item, index) => (
          <ProfessionCard key={index} items={item.professions} />
        ))}
      </div>
    </div>
  );
};

export default ServicesListMenu;
