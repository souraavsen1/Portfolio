import React from "react";
import ss from "../Images/ssg.jpg";
import Zoom from "react-reveal/Zoom";

function About() {
  return (
    <div
      id='about'
      className='ws min-h-screen flex-col bg-gradient-to-br from-gray-700 ... pt-40 flex justify-center items-center'
    >
      <h1
        className='text-5xl text-white mb-20 font-Texturina'
        style={{ fontFamily: "Texturina, serif" }}
      >
        About Me
      </h1>
      <div className='w-10/12  pb-28 flex flex-col md:flex-row items-center justify-between'>
        <div className='min-w-max mr-28  shadow-2xl'>
          <Zoom left>
            <img
              src={ss}
              className='rounded-lg shadow-2xl'
              alt='Sourav Sen'
              height='400px'
              width='400px'
            />
          </Zoom>
        </div>
        <div className='text-white font-bold text-2xl'>
          <Zoom right>
            <h1
              className='mb-10 text-3xl'
              style={{ fontFamily: "Texturina, serif" }}
            >
              Hello,
            </h1>
            <h1
              style={{ fontFamily: "Texturina, serif" }}
              className='font-light mx-20 font-2xl'
            >
              This is Sourav Sen Gupta. Currently, I am a student. I am doing
              B.Sc in CSE at Daffodil International University. Besides,I am
              doing Full Stack Web Development using many stacks. Creating
              something new always grabs my attention. I have created projects
              using Django, React, HTML, CSS, Js, JQuery, etc.
            </h1>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default About;
