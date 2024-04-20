import React from "react";
import TitleComponent from "../title/Title";
import ServiceCard from "../cards/ServiceCard";
import { HomeServicesData } from "@/public/data/data";

const HomeServicesList = () => {
  return (
    <div>
      <TitleComponent title="Home Services" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {HomeServicesData.map((item, index) => (
          <ServiceCard key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HomeServicesList;
