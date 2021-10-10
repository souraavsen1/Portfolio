import { React, useState, useEffect } from "react";
import Typical from "react-typical";
import Bounce from "react-reveal/Bounce";
import axios from "axios";

function Header() {
  const [text, setText] = useState([]);
  const [cv, setCv] = useState();
  
  const header = {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://rfugrhgjljisxqzgdncp.supabase.co/rest/v1/Header_Typical?select=*",
        header
      )
      .then(function (response) {
        setText(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    axios
      .get(
        "https://rfugrhgjljisxqzgdncp.supabase.co/rest/v1/Header?select=*",
        header
      )
      .then(function (response) {
        setCv(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  return (
    <div
      id='home'
      className='min-h-screen bg-gradient-to-br from-gray-700 ... head flex justify-center items-center'
    >
      <div className='w-10/12 flex flex-col md:flex-row-reverse items-center justify-between'>
        <div>
          <img
            className='rounded-lg'
            src={cv ? cv.image : ""}
            alt='Sourav Sen'
            height='450px'
            width='450px'
          />
        </div>
        <div className='text-white font-bold text-2xl'>
          <Bounce bottom cascade>
            <h1 className='mb-10 text-3xl font-medium'>Hey there,</h1>
          </Bounce>

          {text.length > 0 ? (
            <h1
              style={{ fontFamily: "cursive" }}
              className='font-light text-lg'
            >
              <Typical
                className='typical mb-10'
                steps={[
                  `${text[0].typical}`,
                  3000,
                  `${text[1].typical}`,
                  3000,
                  `${text[2].typical}`,
                  3000,
                  `${text[3].typical}`,
                  3000,
                  `${text[4].typical}`,
                  3000,
                ]}
                loop={Infinity}
              />
            </h1>
          ) : (
            ""
          )}

          <a
            href={cv ? cv.cv_link : ""}
            target='_blank'
          >
            <button className='btn text-base font-medium py-2 px-5 rounded-full focus:outline-none animate-UpD cursor-pointer'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
