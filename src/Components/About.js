import React, { useState, useEffect } from "react";
// import ss from "../Images/ssg.jpg";
import Zoom from "react-reveal/Zoom";

function About() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://intense-sierra-73040.herokuapp.com/about-details`)
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        setLoading(false)
      });
  }, []);

  return (
    <div
      id='about'
      className='ws min-h-screen flex-col bg-gradient-to-br from-gray-800 ... pt-40 flex justify-center items-center font_poppins'
    >
      <h1 className='text-4xl font-medium text-white mb-20'>About Me</h1>

      {loading && (
        <div class='border border-gray-300 border-opacity-50 shadow rounded-md p-4 max-w-5xl w-full mx-auto'>
          <div class='animate-pulse flex space-x-4'>
            <div class='rounded-full bg-gray-400 bg-opacity-50 h-12 w-12'></div>
            <div class='flex-1 space-y-4 py-1'>
              <div class='h-4 bg-gray-400 bg-opacity-50 rounded w-3/4'></div>
              <div class='space-y-2'>
                <div class='h-4 bg-gray-400 bg-opacity-50 rounded'></div>
                <div class='h-4 bg-gray-400 bg-opacity-50 rounded w-5/6'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {about.map((aboutdata) => (
        <div
          key={aboutdata._id}
          className='w-10/12 pb-28 grid grid-cols-1 md:grid-cols-2 items-center'
        >
          <div className='mb-14 md:mt-0'>
            <Zoom left>
              <img
                src={aboutdata.image}
                className='w-7/12 mx-auto rounded-lg shadow'
                alt='Sourav Sen'
              />
            </Zoom>
          </div>
          <div className='text-white'>
            <Zoom right>
              <p className='font-light mx-auto text-lg 2xl:text-3xl text-justify'>
                <div className='text-2xl mb-2'>Hello,</div> <br />
                <div>{aboutdata.description}</div>
              </p>
            </Zoom>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
