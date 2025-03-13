import React from "react";

const SustainSpotLigth = () => {
  return (
    <div className="relative bg-[#092241] h-[350px] md:h-[550px] lg:h-[650px] min-1366:h-[95vh] z-0">
      {/* <div className=""> */}
      <div className="fix12 pt-[125px] md:pt-[140px] xl-1920:pt-44">
        <p className="text-[#D7D7D7A3] text-[13px] md:text-base fsans-400">{`Home > Sustainability`}</p>
        <h1 className="md:text-[60px] text-[30px] md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] ">
          Sustainability
        </h1>
      </div>
      <img
        src="./Sustainability/sustainSpot.png"
        // className="absolute bottom-0 w-full h-[637px]"
        className="absolute bottom-0 w-full "
        alt=""
      />
    </div>
  );
};

export default SustainSpotLigth;
