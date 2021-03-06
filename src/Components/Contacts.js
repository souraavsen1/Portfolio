import React from "react";
import fb from "../Images/fb.png";
import github from "../Images/github1.png";
import linkedin from "../Images/linkedin.png";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import emailjs from "emailjs-com";

function Contacts() {
  function sendmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "ssgmail",
        "template_j9bayno",
        e.target,
        "user_zB7uZiZr4qfb9LPkzcoMR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div
      id='contact'
      className='ws min-h-screen bg-gradient-to-tr from-gray-600 ... pt-32 flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-medium text-white mb-10'>Get In Touch</h1>

      <div className='pb-20 ml-20'>
        <Slide top cascade>
          <h1 className='text-xl font-medium text-white mb-5 mt-10'>
            Send Your Messages
          </h1>
        </Slide>
        <form onSubmit={sendmail}>
          <div className='flex flex-col justify-center'>
            <Slide top cascade>
              <div className='lg:w-1/3 md:w-2/3 w-full pb-5'>
                <label className='text-white text-lg font-normal mb-5'>
                  Your Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='example@gmail.com'
                  className='  border-2 border-gray-200 rounded w-96 text-base
                  py-2 px-4 text-black focus:outline-none focus:bg-gray-300 focus:border-teal-500'
                  required
                />
              </div>
            </Slide>

            <Slide top cascade>
              <div className='lg:w-1/3 md:w-2/3 w-full pb-5'>
                <label
                  htmlFor='name'
                  className='text-white text-lg font-normal mb-5'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='example'
                  className=' border-2 border-gray-200 rounded w-96 text-base
                  py-2 px-4 text-black focus:outline-none focus:bg-gray-300 focus:border-teal-500'
                  required
                />
              </div>
            </Slide>
            <Slide top cascade>
              <div className='lg:w-1/3 md:w-2/3 w-full pb-12'>
                <label className='text-white text-lg font-normal mb-5'>
                  Message
                </label>
                <textarea
                  name='messages'
                  type='text'
                  placeholder='Messages'
                  className=' border-2 border-gray-200 rounded w-96 h-36 
                  py-2 px-4 text-black focus:outline-none focus:bg-gray-300 focus:border-teal-500'
                  required
                />
              </div>
            </Slide>
            <Slide top cascade>
              <div className='flex justify-center items-center -ml-16'>
                <input
                  type='submit'
                  value='Send'
                  className='py-2 px-10 mx-auto rounded-full font-semibold cursor-pointer btn'
                ></input>
              </div>
            </Slide>
          </div>
        </form>
      </div>

      <Roll top cascade>
        <div className='flex-row flex justify-between '>
          <a
            href='https://github.com/souraavsen1'
            target='_blank'
            rel='noreferrer'
          >
            <img className='h-10 w-10 mr-12' alt='' src={github}></img>
          </a>
          <a
            href='https://www.linkedin.com/in/sourav-sen-gupta/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='h-10 w-10 mr-12' alt='' src={linkedin}></img>
          </a>

          <a
            href='https://facebook.com/souraavsen'
            target='_blank'
            rel='noreferrer'
          >
            <img className='h-10 w-10' alt='' src={fb}></img>
          </a>
        </div>
        <p className='text-white pt-10 text-xl font-normal'>
          Email : souravsengpt@gmail.com
        </p>
      </Roll>
      <Roll bottom cascade>
        <h4 className='typical mx-40 my-20 text-2xl font-normal'>
          Love The Life You{" "}
          <span className='text-3xl font-medium text-white'> Live</span> The
          Life You Love
        </h4>
      </Roll>
    </div>
  );
}

export default Contacts;
