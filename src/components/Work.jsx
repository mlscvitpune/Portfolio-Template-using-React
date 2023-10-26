import React, {useEffect} from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import WorkCard from "./WorkCard";
import AOS from 'aos';
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' data-aos="fade-in">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
          {/* Grid Items */}
          <WorkCard imgUrl={WorkImg} demoUrl='/' codeUrl='/' />
          <WorkCard imgUrl={realEstate}  demoUrl='/' codeUrl='/' />
          <WorkCard imgUrl={WorkImg}  demoUrl='/' codeUrl='/' />
          <WorkCard imgUrl={realEstate} demoUrl='/' codeUrl='/' />
          <WorkCard imgUrl={WorkImg} demoUrl='/' codeUrl='/' />
          <WorkCard imgUrl={realEstate} demoUrl='/' codeUrl='/' />
        </div>
      </div>
    </div>
  );
};

export default Work;
