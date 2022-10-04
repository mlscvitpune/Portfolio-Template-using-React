import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
          {/* Grid Items */}
          <WorkCard imgUrl={WorkImg} />
          <WorkCard imgUrl={realEstate} />
          <WorkCard imgUrl={WorkImg} />
          <WorkCard imgUrl={`${realEstate}`}/>
          <WorkCard imgUrl={`${WorkImg}`}/>
          <WorkCard imgUrl={`${realEstate}`}/>
        </div>
      </div>
    </div>
  );
};

export default Work;
