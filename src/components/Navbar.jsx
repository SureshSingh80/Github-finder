import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-green-400 flex justify-between p-4'>
        <div className='ml-4 text-xl text-white font-semibold'> <i className="fa-brands fa-github" style={{fontSize:"30px"}}></i> GitHub Finder</div>
        <div className='text-white text-xl'>
            <ul className='flex'>
                <Link to="/"><li className='mr-4 '>Home</li></Link>
                <Link to="/about"><li className='mr-4'>About</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar