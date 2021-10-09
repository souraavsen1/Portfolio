import React from "react";
import github from "../../Images/github.png";
import visit from "../../Images/visit.png";

const Project = ({ project }) => {
  return (
    <div>
      <div
        className=' card rounded-xl px-3 py-5 flex flex-col justify-center 
        relative z-10 items-center bg-gradient-to-br from-gray-300 to-transparent 
        bg-opacity-20 h-80 w-60 shadow-xl  align-middle'
      >
        <div className='h-36 pb-2'>
          <img
            src={project.cover_img}
            alt='ss'
            className='w-48 h-32 mx-auto col-span-2 my-auto '
          />
        </div>
        <h1 className='col-span-2 align-middle text-xl font-semibold'>
          {project.title}
        </h1>
        <p className='text-sm text-justify text-white font-light h-20'>
          {project.description}
        </p>

        <div className='flex-row flex items-center justify-between mt-5'>
          <a rel='noopener noreferrer' href={project.livesite} target='_blank'>
            <img src={visit} alt='visit' className='w-12 h-12 mx-auto ' />
          </a>
          <a href={project.github} rel='noopener noreferrer' target='_blank'>
            <img src={github} alt='hacksprint' className='w-12 h-12 ml-auto ' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
