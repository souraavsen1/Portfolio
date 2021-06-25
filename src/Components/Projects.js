import React from "react";
import hp from "../Images/hacksprint.jpg";
import github from "../Images/github.png";
import visit from "../Images/visit.png";
import todo from "../Images/todo.png";
import breakingbad from "../Images/br.jpg";
import ps from "../Images/ps.jpg";
import Flip from "react-reveal/Flip";

function Projects() {
  return (
    <div
      id='Projects'
      className='ws min-h-screen bg-gradient-to-br from-gray-700 ... pt-32 pb-16 flex flex-col justify-center items-center'
    >
      <h1 className='text-5xl text-white mb-24'>Projects</h1>
      <Flip left cascade>
        <div className='mr-auto grid grid-cols-4 mx-auto items-center justify-between'>
          <div
            className='card rounded-xl px-3 py-5 flex flex-col justify-center
            my-10
        relative z-10 items-center bg-gradient-to-br from-gray-300 to-transparent h-72 w-60 
        bg-opacity-20 shadow-xl hover:shadow-2xl'
          >
            <img
              src={hp}
              alt='ss'
              className='w-auto h-32 mx-auto col-span-2 my-auto '
            />
            <h1 className='col-span-2 text-2xl font-semibold'>Hacksprint</h1>

            <div className='flex-row flex items-center justify-between mt-5'>
              <a href='https://hacksprint.me' target='_blank'>
                <img
                  src={visit}
                  alt='hacksprint'
                  className='w-12 h-12 mx-auto '
                />
              </a>
              <a
                href='https://github.com/souraavsen1/Hacksprint'
                target='_blank'
              >
                <img
                  src={github}
                  alt='hacksprint'
                  className='w-12 h-12 ml-auto '
                />
              </a>
            </div>
          </div>

          <div
            className=' card rounded-xl px-3 py-5 flex flex-col justify-center 
        relative z-10 items-center bg-gradient-to-br from-gray-300 to-transparent 
        bg-opacity-20 h-72 w-60 shadow-xl ml-10'
          >
            <img
              src={todo}
              alt='ss'
              className='w-auto h-32 mx-auto col-span-2 my-auto '
            />
            <h1 className='col-span-2 text-2xl font-semibold'>
              ToDo Application
            </h1>

            <div className='flex-row flex items-center justify-between mt-5'>
              <a href='https://todo-app-ss.netlify.app/' target='_blank'>
                <img
                  src={visit}
                  alt='hacksprint'
                  className='w-12 h-12 mx-auto '
                />
              </a>
              <a href='https://github.com/souraavsen1/ToDo_App' target='_blank'>
                <img
                  src={github}
                  alt='hacksprint'
                  className='w-12 h-12 ml-auto '
                />
              </a>
            </div>
          </div>

          <div
            className=' card rounded-xl px-3 py-5 flex flex-col justify-center 
        relative z-10 items-center bg-gradient-to-br from-gray-300 to-transparent 
        bg-opacity-20 h-72 w-60 shadow-xl ml-10'
          >
            <img
              src={breakingbad}
              alt='ss'
              className='w-auto h-32 mx-auto col-span-2 my-auto '
            />
            <h1 className='col-span-2 text-2xl font-semibold'>Breaking Bad</h1>

            <div className='flex-row flex items-center justify-between mt-5'>
              <a href='https://breakingbadss.netlify.app/' target='_blank'>
                <img
                  src={visit}
                  alt='hacksprint'
                  className='w-12 h-12 mx-auto '
                />
              </a>
              <a
                href='https://github.com/souraavsen1/Breaking_Bad'
                target='_blank'
              >
                <img
                  src={github}
                  alt='hacksprint'
                  className='w-12 h-12 ml-auto '
                />
              </a>
            </div>
          </div>

          <div
            className=' card rounded-xl px-3 py-5 flex flex-col justify-center 
        relative z-10 items-center bg-gradient-to-br from-gray-300 to-transparent 
        bg-opacity-20 h-72 w-60 shadow-xl ml-10 align-middle'
          >
            <img
              src={ps}
              alt='ss'
              className='w-auto h-32 mx-auto col-span-2 my-auto '
            />
            <h1 className='col-span-2 align-middle text-2xl font-semibold'>
              Pharmaceutical Site
            </h1>

            <div className='flex-row flex items-center justify-between mt-5'>
              <a target='_blank'>
                <img src={visit} alt='visit' className='w-12 h-12 mx-auto ' />
              </a>
              <a
                href='https://github.com/souraavsen1/Pharmaceutical_Site'
                target='_blank'
              >
                <img
                  src={github}
                  alt='hacksprint'
                  className='w-12 h-12 ml-auto '
                />
              </a>
            </div>
          </div>
        </div>
      </Flip>
    </div>
  );
}

export default Projects;
