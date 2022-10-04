import React from "react";

// import HTML from "../assets/html.png";
// import CSS from "../assets/css.png";
// import JavaScript from "../assets/javascript.png";
// import ReactImg from "../assets/react.png";
// import Node from "../assets/node.png";
// import FireBase from "../assets/firebase.png";
// import AWS from "../assets/aws.png";
// import GitHub from "../assets/github.png";
// import Tailwind from "../assets/tailwind.png";
// import Mongo from "../assets/mongo.png";
import {iconsarray} from '../constants.js';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Skills
          </p>
          <p className='py-4'>// These are the technologies I've worked with</p>
          <div className="list">
          {iconsarray.map(({id, image, title, source, height, width}) => (
          <div className="icon" key={id}><a href = {source} target='_blank' rel='nonreferrer' > <img src = {image} height={height} width={width}/> </a></div>
        ))}
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
