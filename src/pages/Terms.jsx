import React, { useEffect,useState } from 'react';
import { getDocs } from "firebase/firestore";
import {termCond} from "../firebase";
import {Footer} from "../components/Footer";
import Term from "../image/Terms.png";
import {Helmet} from "react-helmet";

 export const Terms=()=>{
    const[data,setData]= useState([]);
    const getData=async()=>{
        const dataDb=await getDocs(termCond);
        const allData=dataDb.docs.map((val)=>({...val.data(),id:val.id}));
        setData(allData);
    };
    useEffect(()=>{
        getData();
    },[]);




  return (
   <>
    <div className='mt-36'>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Terms </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="relative ">
        <img
          src={Term}
          alt=""
          className="     h-[20rem] top-10  z-20  w-full"
        />
        <span className="absolute bottom-[8rem]  flex z-50    bg-opacity-70 md:min-w-80    md:h-20 p-2  rounded-xl text-center bg text-white font-extrabold text-2xl md:text-6xl justify-center  mx-2">
          {" "}
          Privacy Policy
        </span>
        <div className="absolute top-0 left-0 w-full z-10 h-full bg-[#8f3035] opacity-30 "></div>
      </div>

        <div className='md:mt-10  md:mb-20  md:mx-40 p-5  md:admin-header  '>
   
        <div className='pt-4 pb-7'>{data.map((item,id)=>(
            <div className='mx-8 my-2 '>
            <h1 className='text-3xl font-bold mt-10  mb-2 leading-1 font-extra '>{item.title}</h1>
            <p className='text-black text-xl text-justify font-extra'>{item.description}</p>
            
            </div>
        ))}</div>
       
        </div>
      
        <section><Footer/></section>
    </div>
    
    
   </>


  );
};

