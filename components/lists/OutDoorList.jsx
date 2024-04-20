import React from "react";
import TitleComponent from "../title/Title";
import ServiceCard from "../cards/ServiceCard";
import { OutDoorData } from "@/public/data/data";

const OutDoorList = () => {
  return (
    <div>
      <TitleComponent title="Outdoor & Garden" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {OutDoorData.map((item, index) => (
          <ServiceCard key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default OutDoorList;
