import React from "react";
import ParkinSpot from "./components/ParkinSpot";
import TabMenu from "./components/TabsMenu";
import ParkOverview from "./components/ParkOverview";
import ParkInfo from "./components/ParkInfo";
import LastSw from "./components/LastSw";
import CharSlide from "./components/CharSlide";
import PhVdslider from "./components/PhVdslider";
const page = () => {
  return (
    <div className="bg-[#EEF0F3]">
      <ParkinSpot />
      <TabMenu />
      <ParkOverview />
      <ParkInfo />
      <CharSlide />
      <PhVdslider />
      <LastSw />
    </div>
  );
};

export default page;
