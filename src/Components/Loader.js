import React from 'react'
import loader from "../Images/Loader.gif";


function Loader() {
    return (
      <div className=' flex justify-center items-center loader min-h-screen bg-gradient-to-br from-gray-700 ...'>
        <img src={loader} ></img>
      </div>
    );
}

export default Loader
