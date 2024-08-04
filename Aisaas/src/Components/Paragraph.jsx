import React, { useState } from "react";
import axios from "axios";

const Paragraph = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCpE-_0je5_FM9D5ETQJ5SxpBO8HYtIYzI",
      method: "post",
      data: {
        contents: [{ parts: [{ text: "generate paragraph for" + question }] }],
      },
    });
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  return <div>
   <div className="bg-custom-gradient px-20 py-60 font-satoshi">
        <h1 className="font-bold text-7xl text-center text-white leading-snug">
          Free Paragraph Generator
        </h1>
        <p className="text-white text-center text-4xl font-normal py-10">
        Generate complete paragraphs for free with our AI Paragraph Generator that quickly builds unique content based on your instructions.
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
            <p>{answer}</p>
          </div>
      </div>
    </div>;
};

export default Paragraph;
