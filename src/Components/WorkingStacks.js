import React from "react";
import react from "../Images/react.png";
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.webp";
import dj from "../Images/dj.png";
import RubberBand from "react-reveal/RubberBand";
import Roll from "react-reveal/Roll";

function WorkingStacks() {
  return (
    <div
      id='WorkingStacks'
      className='ws min-h-screen bg-gradient-to-tr from-gray-600 ... head pt-32 pb-16 flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-medium  text-white mb-24'>Working Stacks</h1>
      <RubberBand>
        <div className='flex-row flex justify-between '>
          <div className='bg-white mr-10 rounded-lg shadow-2xl flex flex-col flex-wrap h-40 w-40 justify-center items-center'>
            <img className='h-20 w-20 animate-bounce1' alt="."  src={html}></img>
            <h3 className='text-xl  mt-3 text-black align-text-bottom'>HTML</h3>
          </div>
          <div className='bg-white mr-10 rounded-lg shadow-2xl flex flex-col flex-wrap h-40 w-40 justify-center items-center'>
            <img className='h-20 w-20 animate-wiggle' alt="."  src={css}></img>
            <h3 className='text-xl mt-3 text-black align-text-bottom '>CSS</h3>
          </div>
          <div className='bg-white mr-10 rounded-lg shadow-2xl flex flex-col flex-wrap h-40 w-40 justify-center items-center'>
            <img className='h-20 w-20 animate-bounce1' alt="."  src={dj}></img>
            <h3 className='text-xl mt-3 text-black align-text-bottom '>
              Django
            </h3>
          </div>
          <div className='bg-white mr-10 rounded-lg shadow-2xl flex flex-col flex-wrap h-40 w-40 justify-center items-center'>
            <img className='h-20 w-20 animate-wiggle' alt="."  src={js}></img>
            <h3 className='text-xl mt-3 text-black align-text-bottom '>
              JavaScript
            </h3>
          </div>
          <div className='bg-white rounded-lg shadow-2xl flex flex-col flex-wrap h-40 w-40 justify-center items-center  '>
            <img className='h-20 w-20 animate-spin1' alt="."  src={react}></img>
            <h3 className='text-xl mt-3 text-black align-text-bottom '>
              React Js
            </h3>
          </div>
        </div>
      </RubberBand>
      <Roll bottom cascade>
        <h4 className='text-white text-justify mx-40 my-10 text-lg font-light'>
          I have many experiences of working on different platforms, different
          languages like C, Java, JavaScript, Python. Though Python and
          JavaScript are the most favorite among them. I have worked on
          different Frameworks like Django, bootstrap, Django Rest-Framework and
          also worked on React and tailwind CSS, many other UI components. I
          really like Web Development. I have done many projects. I have
          experiences doing live project of DIU CPC, which was “Hacksprint”. An
          online judging platform for Web Developers.
        </h4>
      </Roll>
    </div>
  );
}

export default WorkingStacks;
