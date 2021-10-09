import React from 'react'

const Stack = ({ stack }) => {
  return (
    <div>
      <div className='bg-white rounded-lg shadow-2xl flex flex-col flex-wrap h-32 w-32 justify-center items-center'>
        <img
          className='h-12 w-12 animate-bounce1'
          alt='.'
          src={stack.stack_image}
        ></img>
        <h3 className='text-base  mt-3 text-black align-text-bottom'>
          {stack.stack_name}
        </h3>
      </div>
    </div>
  );
};

export default Stack
