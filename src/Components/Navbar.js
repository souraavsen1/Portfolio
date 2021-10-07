import React from "react";
import "../index.css";
import { Link } from "react-scroll";

// const logo1 = "<";
// const logo2 = "Sourav Sen";
// const logo3 = "/>";


function Navbar() {
  return (
    <header className='top-0 sticky shadow-xl z-20 bg-gray-800 bg-opacity-95'>
      <div className='w-10/12 text-white flex items-center justify-between mx-auto py-4'>
        <Link to='home' smooth={true} duration={1000}>
          <div className='text-4xl font-bold flex cursor-pointer'>
            <h3 className='text-3xl font-normal'>Sourav Sen</h3>
          </div>
        </Link>
        <div className='flex items-center justify-between text-md font-normal'>
          <div className='hover:text-green-300'>
            <Link to='home' smooth={true} spy={true} duration={700}>
              <a className='cursor-pointer'>
                <h2>Home</h2>
              </a>
            </Link>
          </div>

          <div className='ml-10'>
            <div className='hover:text-green-300'>
              <Link
                to='about'
                smooth={true}
                spy={true}
                offset={20}
                duration={800}
              >
                <a className='cursor-pointer'>
                  <h2>About</h2>
                </a>
              </Link>
            </div>
          </div>

          <div className='ml-10'>
            <div className='hover:text-green-300'>
              <Link to='WorkingStacks' smooth={true} spy={true} duration={700}>
                <a className='cursor-pointer'>
                  <h2>Skills</h2>
                </a>
              </Link>
            </div>
          </div>

          <div className='ml-10'>
            <div className='hover:text-green-300'>
              <Link to='Projects' smooth={true} spy={true} duration={700}>
                <a className='cursor-pointer'>
                  <h2>Projects</h2>
                </a>
              </Link>
            </div>
          </div>
          <div className='ml-10'>
            <div className='hover:text-green-300'>
              <Link to='contact' smooth={true} spy={true} duration={700}>
                <a className='cursor-pointer'>
                  <h2>Contact</h2>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
