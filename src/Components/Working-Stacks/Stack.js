import React from 'react'

const Stack = ({ stack }) => {

  return (
    <div>
      <div className=' rounded-md flex flex-col flex-wrap p-2 md:h-14 justify-center items-center'>
        {/* <img
          className='h-12 w-12 animate-bounce1'
          alt='.'
          src={stack.stack_image}
        ></img> */}
        <h3 className='text-xs md:text-sm font-semibold text-center text-black align-text-bottom'>
          {stack.stack}
        </h3>
      </div>
    </div>
  );
};

export default Stack
