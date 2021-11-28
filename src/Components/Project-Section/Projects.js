import { React, useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Project from "./Project";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://intense-sierra-73040.herokuapp.com/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      id='Projects'
      className='ws min-h-screen bg-gradient-to-br from-gray-700 ... py-20 flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-medium  text-white mb-24'>Projects</h1>
      {loading ? (
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
      ) : (
        <Zoom left cascade>
          <div className='mr-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 mx-auto items-center justify-between'>
            {projects.map((project) => (
              <Project key={project.id} project={project}></Project>
            ))}
          </div>
        </Zoom>
      )}
    </div>
  );
}

export default Projects;
