import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const More = (props) => {


  let {data}=props;
 

  console.log("data in More component",data);

  // accessing local storage data
  const localStorageData=localStorage.getItem("data");
  console.log("local storage data=",JSON.parse(localStorageData));

  const localStorageUsername=localStorage.getItem("username");
  let username=JSON.parse(localStorageUsername);


  if(!data){
    data=JSON.parse(localStorageData);
  }

  return (
    <div className='m-4 w-full h-[100vh]'>

      {/* first row-div */}
      <div className='flex ml-[8%]'>
          <Link to="/back"><button className='bg-gray-400 p-2 m-2 text-white'>Back to Search</button></Link>
          <p className='m-2 p-2 text-gray-700'>Hireable: {data.hireable?<i className="fa-solid fa-circle-check text-[green]"></i>:<i className="fa-solid fa-circle-xmark text-[red]"></i>} </p>
          
      </div>
        
        {/* second row-div */}
        <div className=' flex justify-center ml-[8%] w-[80%]  border-2  p-2 second-row-div'>


        <div className='flex flex-to-inline'>
            {/* first div */}
          <div className=' w-full    '>
            
            <div className=''>
              <img src={data.avatar_url} alt="" width="140px" className='m-auto'/>
              <p className='text-center text-xl font-semibold text-gray-600'>{data.name?data.name:""}</p>
              <p className='text-center text-gray-600'>{data.location?data.location:""}</p>
              <p className='text-center font-light text-lg'>Created At: {data.created_at?data.created_at:""}</p>
            </div>
            
          </div>

          {/* second div  */}
            <div className='  w-full '>
             
               <p className='font-semibold text-lg text-gray-700  '>Bio:</p>
               <p className='mb-8'>{data.bio?data.bio:"not mentioned yet"}</p>
               <p className='mb-2'><a  href={data.html_url} target="_blank" className='bg-gray-600 text-white p-2 mb-4  profile-btn'>Github profile</a></p>
               <p className='mb-2'><span className='font-semibold text-lg text-gray-700'>username:</span> {data.login}</p>
               <p className='text-gray-700 font-semibold'>website: <a href={data.blog} target='_blank' className='text-red-600'>{data.blog?data.blog:"not mentioned yet"}</a></p>
             
            </div>
        </div>
      </div>

      {/* third row-div */}
      <div className='   flex justify-center ml-[8%]  w-[80%] mt-4  border-2   absolute flex-to-inline '>
          <p className='m-4 p-2 bg-green-600 text-white'>Followers: {data.followers}</p>
          <p className='m-4 p-2 bg-red-500 text-white'> Following: {data.following}</p>
          <a href={`https://github.com/${username}?tab=repositories`} target='_blank' className='m-4 p-2 bg-yellow-500 text-white block'>Repository: {data.public_repos}</a>
          <p className='m-4 p-2 bg-gray-500 text-white'>Gists: {data.public_gists}</p>
      </div>

        
    </div>
  )
}

export default More