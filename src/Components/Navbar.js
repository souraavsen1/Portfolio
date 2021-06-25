import React from "react";
import "../index.css";
import { Link } from "react-scroll";
// import WorkingStacks from "./WorkingStacks";

const logo1 = "<";
const logo2 = "Sourav Sen";
const logo3 = "/>";


function Navbar() {
  return (
    <header className='nav_main top-0 sticky shadow-xl z-20'>
      <div className=' text-white flex items-center justify-between w-10/12 mx-auto py-5 h-20'>
        <Link to='home' smooth={true} duration={1000}>
          <div className='text-4xl font-bold flex cursor-pointer'>
            <h1 style={{ color: "rgb(165, 244, 247)" }}>{logo1}</h1>
            <h1>{logo2}</h1>
            <h1 style={{ color: "rgb(165, 244, 247)" }}>{logo3}</h1>
          </div>
        </Link>
        <div className=' nav flex items-center justify-between text-lg font-semibold'>
          <div className='hover:text-green-300'>
            <Link to='home' smooth={true} spy={true} duration={700}>
              <a className='cursor-pointer '>
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
