import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";

const Main = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function answerGenerator() {
    setAnswer("Loading...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCpE-_0je5_FM9D5ETQJ5SxpBO8HYtIYzI",
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });
      const generatedText = response.data.candidates[0].content.parts[0].text;
      const processedText = generatedText.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
      const newText = processedText.split("*").join("</br>")
      setAnswer(newText);
    } catch (error) {
      setAnswer("An error occurred while generating the answer.");
      console.error(error);
    }
  }

  return (
    <div>
      <div className="font-satoshi">
        <nav className="flex justify-between px-20 py-8">
          <h1 className="font-normal text-4xl">Gemini</h1>
          <img
            src={assets.user_icon}
            alt="profile"
            className="w-16 h-16 rounded-full"
          />
        </nav>
        <div className="lg:px-60 lg:py-16">
          <h1 className="font-semibold text-7xl text-center lg:text-left text-slate-300">
            <span className="text-cus-gradient">
              Hello, Nurul Islam <br />
            </span>
            How can I help you today?
          </h1>
        </div>
        <div className="px-60 py-20 lg:py-0 lg:grid gap-40 lg:grid-cols-4 sm:hidden">
          <div className="cards bg-blue-200 h-80 w-80 rounded-3xl relative cursor-pointer p-10 mb-5 text-2xl">
            <h2>Create a travel itinerary for a city</h2>
            <img
              src={assets.compass_icon}
              alt=""
              className="w-16 p-3 absolute bg-white rounded-full bottom-10 right-10"
            />
          </div>
          <div className="cards bg-blue-200 h-80 w-80 rounded-3xl relative cursor-pointer p-10 mb-5 text-2xl">
            <h2>Create a travel itinerary for a city</h2>
            <img
              src={assets.compass_icon}
              alt=""
              className="w-16 p-3 absolute bg-white rounded-full bottom-10 right-10"
            />
          </div>
          <div className="cards bg-blue-200 h-80 w-80 rounded-3xl relative cursor-pointer p-10 mb-5 text-2xl">
            <h2>Create a travel itinerary for a city</h2>
            <img
              src={assets.compass_icon}
              alt=""
              className="w-16 p-3 absolute bg-white rounded-full bottom-10 right-10"
            />
          </div>
          <div className="cards bg-blue-200 h-80 w-80 rounded-3xl relative cursor-pointer p-10 text-2xl">
            <h2>Create a travel itinerary for a city</h2>
            <img
              src={assets.compass_icon}
              alt=""
              className="w-16 p-3 absolute bg-white rounded-full bottom-10 right-10"
            />
          </div>
        </div>
        <div>
          <p
            className="text-black text-left text-2xl font-normal lg:px-60 sm:px-20 py-16"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
        <div className="lg:pl-60 lg:pr-24 lg:py-16">
          <div className="search-box flex items-center bg-blue-100 p-8 justify-between gap-8 rounded-full text-2xl h-20">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              placeholder="Enter Prompt Here"
              className="bg-transparent outline-none placeholder-slate-700 w-full"
            />
            <div className="flex gap-3">
              <img className="w-9" src={assets.gallery_icon} alt="" />
              <img className="w-9" src={assets.mic_icon} alt="" />
              <button onClick={answerGenerator}>
                <img className="w-16" src={assets.send_icon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
