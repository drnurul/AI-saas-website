import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="sm:min-h-screen bg-custom-gradient  px-5 py-5 sm:py-20 font-satoshi">
        <h1 className="font-bold text-4xl sm:text-5xl text-center text-white leading-snug">
          Write Factually Accurate Articles <br />
          with Real-Time Data That{" "}
          <span className="text-cus-gradient">Drive Traffic</span>
        </h1>
        <p className="text-white text-center text-lg sm:text-2xl font-normal py-6 sm:py-8 lg:py-10">
          With comprehensive competitor analysis, detailed web research, and
          strategic internal linking, <br className="hidden lg:block" /> your
          articles will be SEO-optimized and primed to rank on Google in no
          time.
        </p>
        <div className="grid gap-5 sm:gap-0   lg:grid-cols-2  py-6 text-white text-center text-2xl   font-semibold ">
          <Link to="/main" className="block">
            <button className="bg-custom-btn sm:w-2/4 w-full  mx-auto h-16   rounded-lg outline outline-4 outline-slate-700">
            Chat Wth AI
            </button>
          </Link>
          <button className="bg-slate-600 w-full  sm:w-2/4 mx-auto h-16   rounded-lg outline outline-4 outline-slate-700">
            Request a demo
          </button>
        </div>
      </div>

      {/* Smart Work Section */}
      <div className="px-5 sm:px-10  py-10 sm:py-20">
        <h1 className="font-bold text-4xl sm:text-5xl  text-center text-black leading-snug">
          Work Smart, Not Hard: <br />
        </h1>
        <h1 className="text-cus-gradient font-bold text-4xl sm:text-5xl  text-center  py-6 sm:py-8 ">Generate Articles 100x Faster</h1>
        <Link to="/main" className=" flex justify-center">
          <button className="bg-custom-btn w-full sm:w-3/12  mx-auto h-16 sm:h-16  mt-4 rounded-lg text-white text-center text-2xl   font-semibold ">
            Chat Wth AI
          </button>
        </Link>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default Home;
