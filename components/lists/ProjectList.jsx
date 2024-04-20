import React from "react";
import TitleComponent from "../title/Title";
import ServiceCard from "../cards/ServiceCard";
import { ProjectsListData } from "@/public/data/data";

const ProjectList = () => {
  return (
    <div>
      <TitleComponent title="Get Recommended Pros for Your Project" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {ProjectsListData.map((item, index) => (
          <ServiceCard key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
