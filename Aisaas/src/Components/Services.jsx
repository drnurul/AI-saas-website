import React from "react";
import { Link } from 'react-router-dom';
import ServiceCard from "../Components/Cards/Servicecard";
const Services = () => {
  const services = [
    {
      title: <Link to="/instacaption" className="block">Free AI Caption Generator for Instagram and More</Link> ,
      description:
        "This free AI powered Instagram caption generator will create the perfect caption for your photo and help you get more likes, followers and comments.",
    },
    {
      title: <Link to="/paragraph" className="block">Paragraph Generator</Link> ,
      description:
        "This free AI Paragraph Generator will generate complete paragraphs according to the instructions provided by you.",
    },
    {
      title: "Content Idea Generator",
      description:
        "Free Content Idea Generator - Use our exclusive content idea generator to come up with your next blog or social media post!",
    },
  
    {
      title: "Blog Post Idea Generator",
      description:
        "Want to start a blog but have no ideas what to write? Use our blog post idea generator you can get free blog post ideas for all types of blogs including health, fitness, travel, food, relationships and more…",
    },
  ];

  return (
    <div>
      <div className="bg-indigo-950 grid gap-10 lg:grid-cols-2 bg- px-20 py-40">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
