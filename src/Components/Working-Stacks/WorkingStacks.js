import { React, useState, useEffect } from "react";
import RubberBand from "react-reveal/RubberBand";
import "./Stack.css";

function WorkingStacks() {
  const [stacks, setStacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://intense-sierra-73040.herokuapp.com/stacks`)
      .then((res) => res.json())
      .then((data) => {
        setStacks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      id='skills'
      className='min-h-screen bg-gradient-to-tr from-gray-600 ... head py-20 flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-medium  text-white mb-24'>Skills</h1>

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
        <RubberBand>
          <div className='w-11/12 md:w-9/12 mx-auto grid grid-cols-3 md:grid-cols-5 items-center gap-4 md:gap-y-4 md:gap-x-8 2xl:gap-10'>
            {stacks.map((stc) => (
              <div className='flex items-center'>
                <div class='round'>
                  <input type='checkbox' checked id='checkbox' />
                  <label for='checkbox'></label>
                </div>
                <div className='ml-6 text-white text-opacity-80'>
                  {stc.stack}
                </div>
              </div>
            ))}
          </div>
        </RubberBand>
      )}
    </div>
  );
}

export default WorkingStacks;
