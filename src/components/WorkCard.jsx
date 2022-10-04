import React from 'react'
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const WorkCard = (props) => {
    return (
        <>
            <div className='shadow-lg  flex justify-center shadow-[#040c16] group container rounded-lg items-center mx-auto content-div'>
                <div className="group-hover:hidden neumorphic-img">
                    <img src={`${props.imgUrl}`} className=" bg-cover rounded-lg p-4" alt="" />
                </div>
                {/* Hover Effects */}
                <div className='hidden group-hover:block '>
                    <div className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                    </div>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard
