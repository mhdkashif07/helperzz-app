import React from "react";
import TitleComponent from "../title/Title";
import ServiceCard from "../cards/ServiceCard";
import { HomeDesigningData } from "@/public/data/data";

// grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10

const HomeDesigningList = () => {
  return (
    <div>
      <TitleComponent title="Home Design & Remodeling" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {HomeDesigningData.map((item, index) => (
          <ServiceCard key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HomeDesigningList;
