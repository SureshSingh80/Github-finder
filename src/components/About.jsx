import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center'>
        <div className='m-8 flex'>
          <img src="https://i.pinimg.com/474x/da/54/6f/da546f0edd4f974f48e5338c45e0b86a.jpg" alt="image not loaded" width="100px"  />
          <div>
            <h2 className='text-[40px] font-bold underline text-gray-600'>About the app</h2>
            <p className='text-gray-600'>React application for find github profile</p>
            <p className='text-gray-600'>Created by <span className='text-red-700'>Suresh Singh</span></p>
            <p className='text-gray-600'>You can see source code on my <a href="https://www.github.com/SureshSingh80" target="__blank" className='text-red-700'>github</a></p>
          </div>  
           
        
        </div>
    </div>
  )
}

export default About