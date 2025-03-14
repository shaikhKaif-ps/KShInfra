"use client";
import React, { useState } from "react";

const SustainGovernence = () => {
  const [openIndex, setOpenIndex] = useState(0); // Always keeps one item open

  const accordionData = [
    {
      title: "Ethics & Compliance",
      content:
        "The KSH INFRA Code of Conduct Handbook sets a high bar for compliance. This encompasses every aspect of how our team interacts with internal and external stakeholders to how our projects are commissioned and managed.",
      image: "Sustainability/Ethics&Compliance.png",
    },
    {
      title: "Safety",
      content:
        "Not only do KSH INFRA parks offer the best-in-class amenities, they also ensure that the safety protocols and facilities are given the highest priority. Safety is integral to our operations, and this enables us to deliver reliable, compliant and sustainable infrastructure",
      image: "Sustainability/SustainabilitySafety.png",
    },
    {
      title: "Value Creation",
      content:
        "We create value for society and our stakeholders through numerous channels, such as employment opportunities, tax payment assistance, supply chain participation and investment in local communities.",
      image: "Sustainability/SustainabilityValueCreation.png",
    },
  ];

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-[#092241]">
      <div className="min-1366:ml-[calc((100vw-1250px)/2)] xl-1280:ml-[60px] xl-1024:ml-[50px] pb-12">
        <div className="pt-14 pb-4 md:pt-16 md:pb-14 max-w-[1250px]">
          <h1 className="ftp-500 text-[44px] text-white border-[#D7D7D7] border-b-[1px] w-[90%] mx-auto lg:w-full">
            Governance
          </h1>
        </div>

        {/* Accordion Content */}
        <div className="flex justify-between max-w-screen xl-1280:gap-14">
          <div className="w-[90%] mx-auto left min-1024:w-auto min-1024:mx-0">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="xl-1024:w-[450px] xl:w-[525px] max-w-full border-[#D7D7D7] border-b-[1px] border-opacity-35 last:border-none"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h1 className="text-white fsans-700 text-[22px] uppercase py-5">
                    {item.title}
                  </h1>
                  <img
                    src={
                      openIndex === index
                        ? "Sustainability/faq_minus.svg"
                        : "Sustainability/faq_plus.svg"
                    }
                    alt=""
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index
                      ? "max-h-[300px] opacity-100 transform translate-y-0 scale-100"
                      : "max-h-0 opacity-0 transform -translate-y-2 scale-95"
                  }`}
                >
                  <p className="text-[#6C8DAB] fsans-400 text-base pt-3 pb-5">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Image Change with Fade-in Effect */}
          <div className="hidden lg:block right">
            <img
              src={accordionData[openIndex]?.image}
              className="xl-1024:w-[475px] "
              alt="Accordion Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainGovernence;
