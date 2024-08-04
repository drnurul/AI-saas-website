import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-custom-gradient px-20 py-60 font-satoshi">
        <h1 className="  font-bold text-7xl text-center  text-white leading-snug">
          Write Factually Accurate Articles <br />
          with Real-Time Data That{" "}
          <span className="text-cus-gradient">Drive Traffic</span>
        </h1>
        <p className="text-white text-center text-4xl font-normal py-10">
          With comprehensive competitor analysis, detailed web research, and
          strategic internal linking, <br /> your articles will be SEO-optimized
          and primed to rank on Google in no time.
        </p>
        <div className=" grid grid-flow-row gap-10  lg:grid-flow-col py-10 text-white text-center text-3xl font-semibold uppercase">
          <Link to="/main" className="block">
            <button className=" bg-custom-btn lg:w-4/6  lg:ml-60 sm:p-4 h-24  rounded-lg outline outline-4 outline-slate-700">
              Boost Your Google Rank Now
            </button>
          </Link>
          <button className="bg-slate-600  lg:w-3/6 py-7  rounded-lg outline outline-4 outline-slate-700">
            Request a demo
          </button>
        </div>
      </div>
      <div className="ct-btn px-20 py-60  justify-items-center">
        <h1 className="font-bold text-7xl text-center  text-black leading-snug ">
          Work Smart, Not Hard: <br />
          <span className="text-cus-gradient">
            Generate Articles 100x Faster
          </span>
        </h1>
        <Link to="/main" className="block flex justify-center">
          <button className=" bg-custom-btn lg:w-4/12 sm:p-4 h-24 mt-4 rounded-lg text-white text-center text-3xl font-semibold capitalize">
            Boost Your Google Rank Now
          </button>
        </Link>
      </div>
      <Services />
    </div>
  );
};

export default Home;
