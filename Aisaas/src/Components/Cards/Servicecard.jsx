import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-violet-800 py-10 pl-10 pr-20 font-satoshi rounded-lg outline outline-1 outline-slate-50">
      <h3 className="text-white text-center lg:text-left text-5xl font-semibold hover:text-black">
        {title}
      </h3>
      <p className="text-white text-center lg:text-left text-3xl font-normal py-10">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
