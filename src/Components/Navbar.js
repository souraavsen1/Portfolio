import React from "react";
import "../index.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className='top-0 sticky shadow-lg z-20 bg-gray-600 bg-opacity-75 backdrop-filter backdrop-blur-md'>
      <div className='w-10/12 text-white flex items-center justify-between mx-auto py-4'>
        <Link to='home' smooth={true} duration={1000}>
          <div className='text-4xl font-bold flex cursor-pointer'>
            <h3 className='text-base md:text-3xl font-normal'>Sourav Sen</h3>
          </div>
        </Link>
        <div className='flex items-center justify-between text-md font-normal'>
          <div className='hover:text-green-300'>
            <Link to='home' smooth={true} spy={true} duration={700}>
              <div className='cursor-pointer'>
                <h2 className='text-xs md:text-base'>Home</h2>
              </div>
            </Link>
          </div>

          <div className='ml-2 md:ml-10'>
            <div className='hover:text-green-300'>
              <Link
                to='about'
                smooth={true}
                spy={true}
                offset={20}
                duration={800}
              >
                <div className='cursor-pointer'>
                  <h2 className='text-xs md:text-base'>About</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className='ml-2 md:ml-10'>
            <div className='hover:text-green-300'>
              <Link to='skills' smooth={true} spy={true} duration={700}>
                <div className='cursor-pointer'>
                  <h2 className='text-xs md:text-base'>Skills</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className='ml-2 md:ml-10'>
            <div className='hover:text-green-300'>
              <Link to='Projects' smooth={true} spy={true} duration={700}>
                <div className='cursor-pointer'>
                  <h2 className='text-xs md:text-base'>Projects</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className='ml-2 md:ml-10'>
            <div className='hover:text-green-300'>
              <Link to='contact' smooth={true} spy={true} duration={700}>
                <div className='cursor-pointer'>
                  <h2 className='text-xs md:text-base'>Contact</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
