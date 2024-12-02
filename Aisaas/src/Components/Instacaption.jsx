// Instacaption.js
import axios from "axios";
import React, { useState } from "react";

const Instacaption = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")

  async function generateAnswer() {
    setAnswer("Loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCpE-_0je5_FM9D5ETQJ5SxpBO8HYtIYzI",
      method: "post",
      data: {
        contents: [
          { parts: [{ text: "generate instagram caption for" + question }] },
        ],
      },
    });
    const rawResponse = (response.data.candidates[0].content.parts[0].text);
    const newResponse = rawResponse.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    const finalResponse = newResponse.split("*").join("</br>");
    setAnswer(finalResponse)
  }

  return (
    <div>
      <div className="bg-custom-gradient px-20 py-32 font-satoshi">
        <h1 className="font-bold sm:text-5xl text-4xl text-center text-white leading-snug">
          Free AI Caption Generator for Instagram
        </h1>
        <p className="text-white text-center text-3xl font-normal py-10">
          Craft the perfect Instagram caption in seconds with this AI powered
          generator that analyzes your photo and creates engaging text to get
          more likes and followers.
        </p>
        <div className="grid grid-cols-12 py-10 px-10 gap-8">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="h-16 rounded-md px-5 col-span-8 outline-none text-2xl placeholder-blue-800"
            type="text"
            placeholder="Enter your topic"
          />
          <button
            onClick={generateAnswer}
            className="bg-custom-btn col-span-4 text-white text-center text-2xl font-semibold rounded-lg outline outline-4 outline-slate-700"
          >
            Generate
          </button>     
        </div>
        <div className="text-white text-center text-2xl font-normal py-10 ">
        <p
            className="text-white text-left text-2xl font-normal  py-10"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
          </div>
      </div>
    </div>
  );
};


export default Instacaption;
