import React from "react";
import github from "../../Images/github.png";
import visit from "../../Images/visit.png";

const Project = ({ project }) => {
  return (
    <div>
      <div
        className=' card rounded-xl px-3 py-5 flex flex-col justify-center 
        relative z-10 items-center bg-gradient-to-br from-gray-300 to-transparent 
        bg-opacity-20 h-80 w-64 shadow-xl  align-middle'
      >
        <div className='h-36 pb-2'>
          <img
            src={project.image}
            alt='ss'
            className='w-24 h-24 mx-auto col-span-2 my-auto '
          />
        </div>
        <h1 className='col-span-2 align-middle text-base font-semibold'>
          {project.proect_name}
        </h1>
        <p className='text-sm px-3  text-white font-light h-20 pt-4'>
          {project.proect_description}
        </p>

        <div className='flex-row flex items-center justify-between mt-5'>
          <a rel='noopener noreferrer' href={project.livelink} target='_blank'>
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
