import { React, useState, useEffect } from "react";
import ss from "../Images/ssg.jpg";
import Zoom from "react-reveal/Zoom";
import axios from "axios";

function About() {
  const [data, setData] = useState();

  const header = {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://rfugrhgjljisxqzgdncp.supabase.co/rest/v1/About-Section?select=*",
        header
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <div
      id='about'
      className='ws min-h-screen flex-col bg-gradient-to-br from-gray-700 ... pt-40 flex justify-center items-center font_poppins'
    >
      <h1 className='text-4xl font-medium text-white mb-20'>About Me</h1>
      <div className='w-10/12 pb-28 flex flex-col md:flex-row items-center justify-between'>
        <div className='min-w-max mr-28 shadow-xl'>
          <Zoom left>
            <img
              src={data ? data[0].about_image : "About me"}
              className='rounded-lg shadow-2xl'
              alt='Sourav Sen'
              height='400px'
              width='400px'
            />
          </Zoom>
        </div>
        <div className='text-white'>
          <Zoom right>
            {/* <h1 className='mb-10 text-2xl font-normal'>Hello,</h1> */}
            <p className='font-light mx-10 text-lg text-justify'>
              {data ? data[0].about : "About me"}
            </p>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default About;
