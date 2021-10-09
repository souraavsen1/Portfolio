import React from "react";
import ss from "../Images/ss.jpg";
import Typical from "react-typical";
import Bounce from "react-reveal/Bounce";

function Header() {
  return (
    <div
      id='home'
      className='min-h-screen bg-gradient-to-br from-gray-700 ... head flex justify-center items-center'
    >
      <div className='w-10/12 flex flex-col md:flex-row-reverse items-center justify-between'>
        <div>
          <img
            className='rounded-lg shadow-xl'
            Src={ss}
            alt='Sourav Sen'
            height='450px'
            width='450px'
          />
        </div>
        <div className='text-white font-bold text-2xl'>
          <Bounce bottom cascade>
            <h1 className='mb-10 text-3xl font-medium'>Hey there,</h1>
          </Bounce>
          <h1 style={{ fontFamily: "cursive" }} className='font-light text-lg'>
            <Typical
              className='typical mb-10'
              steps={[
                "Welcome to my website.",
                2500,
                "I am Sourav Sen Gupta",
                2500,
                "I am a Fullstack Web Developer",
                2500,
                "also doing Mobile Application Development",
                2500,
                "Building something new always attracts me the most.",
                2500,
              ]}
              loop={Infinity}
            />
          </h1>

          <a
            href='https://drive.google.com/file/d/11jNdW1Lyeel4uMFfAYpEnq-z8kFtWorP/view?usp=sharing'
            target='_blank'
          >
            <button className='btn text-base font-medium py-2 px-5 rounded-full focus:outline-none animate-UpD cursor-pointer'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
