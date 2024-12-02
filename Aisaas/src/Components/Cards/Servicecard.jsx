import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-violet-800 py-5 pl-10 pr-20 font-satoshi rounded-lg outline outline-1 outline-slate-50">
      <h3 className="text-white text-center text-2xl sm:text-3xl font-semibold hover:text-black">
        {title}
      </h3>
      <p className="text-white text-center sm:text-2xl text-xl font-normal py-5">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
