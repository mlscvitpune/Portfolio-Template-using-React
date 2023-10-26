import React from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full' data-aos = "fade-down">
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
