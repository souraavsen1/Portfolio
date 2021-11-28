import { React, useState, useEffect } from "react";
import Typical from "react-typical";
import Bounce from "react-reveal/Bounce";

function Header() {
  const [imagedata, setImagedata] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://intense-sierra-73040.herokuapp.com/heding-image`)
      .then((res) => res.json())
      .then((data) => {
        setImagedata(data);
        setLoading(false);
      });
  }, []);

  console.log(imagedata);

  return (
    <div
      id='home'
      className='min-h-screen bg-gradient-to-br from-gray-700 ... head flex justify-center items-center'
    >
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
        <div className='w-10/12 md:flex md:flex-row-reverse justify-between items-center'>
          <div>
            <img
              className='rounded-lg mx-auto mb-14'
              width='60%'
              src={imagedata.image}
              alt='Sourav Sen'
            />
          </div>

          <div className=' text-white font-bold text-2xl'>
            <Bounce bottom cascade>
              <h1 className='mb-10 text-3xl font-medium'>Hey there,</h1>
            </Bounce>

            <h1 style={{ fontFamily: "cursive" }} className='font-thin text-lg'>
              <Typical
                className='secondary mb-10'
                steps={[
                  "Welcome to my website.",
                  3000,
                  "I am Sourav Sen Gupta.",
                  3000,
                  "I am a Fullstack Web Developer",
                  3000,
                ]}
                loop={Infinity}
              />
            </h1>

            <a
              href='https://drive.google.com/file/d/1PbM0rgAkezzIshA6oqSdRRVPRYm61njp/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <button className='btn text-base font-medium py-2 px-5 rounded-full focus:outline-none animate-UpD cursor-pointer'>
                Resume
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
