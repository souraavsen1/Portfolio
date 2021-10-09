import { React, useState, useEffect } from "react";
import Flip from "react-reveal/Flip";
import axios from "axios";
import Project from "./Project";

function Projects() {
  const [projects, setProjects] = useState([]);

  const header = {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://rfugrhgjljisxqzgdncp.supabase.co/rest/v1/Projects?select=*",
        header
      )
      .then(function (response) {
        setProjects(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      id='Projects'
      className='ws min-h-screen bg-gradient-to-br from-gray-700 ... pt-32 pb-16 flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-medium  text-white mb-24'>Projects</h1>
      <Flip left cascade>
        <div className='mr-auto grid grid-cols-4 gap-8 mx-auto items-center justify-between'>
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </Flip>
    </div>
  );
}

export default Projects;
