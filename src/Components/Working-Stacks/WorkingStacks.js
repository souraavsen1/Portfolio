import {React, useState,useEffect} from "react";
import RubberBand from "react-reveal/RubberBand";
import Roll from "react-reveal/Roll";
import Stack from "./Stack";
import axios from "axios";

function WorkingStacks() {

  const [stacks, setStacks] = useState([]);

  const header = {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://rfugrhgjljisxqzgdncp.supabase.co/rest/v1/Stacks?select=*",
        header
      )
      .then(function (response) {
        setStacks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      id='WorkingStacks'
      className='ws min-h-screen bg-gradient-to-tr from-gray-600 ... head pt-32 pb-16 flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-medium  text-white mb-24'>Working Stacks</h1>
      <RubberBand>
        <div className='grid grid-cols-5 gap-8'>
          {stacks.map(stc=><Stack key={stc.id} stack={stc}></Stack>)}
        </div>
      </RubberBand>
      {/* <Roll bottom cascade>
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
      </Roll> */}
    </div>
  );
}

export default WorkingStacks;
