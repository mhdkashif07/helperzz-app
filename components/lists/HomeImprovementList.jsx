import React from "react";
import TitleComponent from "../title/Title";
import ServiceCard from "../cards/ServiceCard";
import { HomeImprovementData } from "@/public/data/data";

const HomeImprovementList = () => {
  return (
    <div>
      <TitleComponent title="Home Improvement" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {HomeImprovementData.map((item, index) => (
          <ServiceCard key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HomeImprovementList;
