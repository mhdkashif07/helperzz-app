import HomeDesigningList from "@/components/lists/HomeDesigningList";
import HomeImprovementList from "@/components/lists/HomeImprovementList";
import HomeServicesList from "@/components/lists/HomeServicesList";
import OutDoorList from "@/components/lists/OutDoorList";
import ProjectList from "@/components/lists/ProjectList";
import ServicesList from "@/components/lists/ServicesList";
import AppliancesList from "@/components/lists/professionalLists/AppliancesList";
import OutdoorList from "@/components/lists/professionalLists/OutDoorList";
import PopularList from "@/components/lists/professionalLists/PopularList";
import RemodelingList from "@/components/lists/professionalLists/RemodelingList";
import RenovationList from "@/components/lists/professionalLists/RenovationList";
import ServicesListMenu from "@/components/lists/professionalLists/ServicesListMenu";
import Search from "@/components/search/Search";
import TitleComponent from "@/components/title/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-5">
      <div className="main-title ml-8 my-8 sm:ml-16">
        <h1 className="text-[18px]">Helperzz / Brose All Categories</h1>
      </div>
      <Search />
      <div className="px-[2rem] sm:px-[3rem] md-[6rem] mt-14">
        <ProjectList />
        <div className="mt-15 sm:mt-20">
          <ServicesList />
        </div>
        <div className="mt-15 sm:mt-20">
          <HomeDesigningList />
        </div>
        <div className="mt-15 sm:mt-20">
          <OutDoorList />
        </div>
        <div className="mt-15 sm:mt-20">
          <HomeServicesList />
        </div>
      </div>
      <div className="professions-container px-12 mt-[50px]">
        <TitleComponent title="Browse All Professionals" />
        <PopularList />
        <RemodelingList />
        <RenovationList />
        <OutdoorList />
        <ServicesListMenu />
        <AppliancesList />
      </div>
    </div>
  );
}
