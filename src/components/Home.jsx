import React from 'react'
import { useState,useEffect } from 'react';
import { TextField } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Home = (props) => {
   
  const {data,setData}=props;
  
  const [loading,setLoading]=useState(false);
  const [username,setUsername]=useState("");
  const [notFound,setNotFound]=useState();


   async function fetchAccount(){
    let res=await fetch(`https://api.github.com/users/${username}`);
    let data=await res.json();
    if(data.login){
      setData(data);
      localStorage.setItem("data",JSON.stringify(data));
      localStorage.setItem("username",JSON.stringify(username));
      setNotFound();
    }
    else{
      setNotFound(data.message);
      setData();
    }
    setLoading(false);
    console.log(data);
 }

   const onHandleChange=(e)=>{
       setUsername(e.target.value);
   }
  const handleSubmit=async(e)=>{
       setNotFound();
       setLoading(true);
       e.preventDefault();
       await fetchAccount();
       setUsername("");
  }

  return (
    <div className='w-full p-16     flex justify-center'>       
        <div className='w-[80%]'>  

         <form action="" onSubmit={handleSubmit}>       
            <TextField value={username} label="enter username" variant='outlined' className='w-full' size="small" onChange={onHandleChange}></TextField>
            <button   className='w-full bg-green-400 mt-8 p-2 text-white rounded-full'>Search</button>
         </form> 

            {   
               
               loading?<div className='w-full text-center flex justify-center'><RotatingLines
               strokeColor="grey"
               strokeWidth="5"
               animationDuration="0.75"
               width="96"
               visible={true}
             /></div>:(data?<div className='text-center  mt-16  '>
                <div className=' border border-green-400 flex justify-center p-2'>
                  <div>
                    <img src={data.avatar_url} alt="" width="100px"/><br />
                    <p className='font-semibold text-[green] '>{data.login}</p>

                    <Link to="/More">
                        <button className='text-white bg-gray-500 p-2 mt-2 rounded'>More Info...</button>
                    </Link>
                   

                  </div>
                </div>
            </div>:"")
              }
            {
               notFound?<div className='w-full text-center text-[red]'>{notFound}</div>:""
            }


         </div>         
      </div>  
  )
}

export default Home