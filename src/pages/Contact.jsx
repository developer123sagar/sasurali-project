import React from 'react';
import {Helmet} from "react-helmet";

import { Footer } from 'components';

import sasurali3 from "../image/sasurali3.JPG";


import {address,clock,phone,mail} from "../image/index.js";





export const Contact = () => {
  return (

<div className='mt-36'>
<Helmet>
                <meta charSet="utf-8" />
                <title>Contact </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div className='relative '>
    <img src={sasurali3} alt="" className='  w-full  h-[20rem] md:h-[40rem] object-cover  ' />
    <span className='absolute md:bottom-[20rem] bottom-[8rem]  flex   bg-[#8f3035] bg-opacity-70 md:min-w-80   md:h-20 p-2  rounded-xl text-center bg text-white font-extrabold text-2xl md:text-6xl justify-center  mx-4'> Contact us</span>
   
    </div>

    {/* contact section */}
    <section id='contact' className='section-space'>
    <div  className='mb-10'>
                    <div className=' flex flex-col md:flex-row  justify-center  w-full p-5 gap-4 md:gap-7 '>
                    <div className="bg-white hover:border hover:border-[#eb0029] cursor-pointer md:w-[24rem]  h-[20rem] rounded-xl  py-5 admin-header relative  ">
                          <img
                            src={address}
                            alt="m"
                            className=" w-24 h-24 mx-auto mt-4 transition-transform transform hover:scale-150 duration-500 "
                          />

                          <div className=" text-center mt-9 ">
                            <h1 className="font-bold text-2xl  mt-4">
                          Our Address
                            </h1>
                            <p className="text-xl mt-4 text-black font-extra">
                             Dibyeshwori,Planning
                             <br/>
                             Manohara,Riverside
                            </p>
                          </div>
                        </div>

                        <a href="mailto:Sasuraliktm125@gmail.com" className='hover:no-underline'>
                        <div className="bg-white hover:border cursor-poimter hover:border-[#eb0029]  md:w-[24rem]  h-[20rem] rounded-xl  py-5 admin-header relative  ">
                          <img
                            src={mail}
                            alt="m"
                            className=" w-24 h-24 mx-auto  mt-4  transition-transform transform hover:scale-150 duration-500 "
                          />

                          <div className=" text-center mt-9 ">
                            <h1 className="font-bold text-2xl  mt-4">
                        Email Address
                            </h1>
                            <p className="text-xl mt-4 text-black">
                              Sasuraliktm125@gmail.com
                            </p>
                          </div>
                        </div>
                        </a>
<a href="tel:+977974-5661355" className='hover:no-underline'>
                        <div className="bg-white hover:border hover:border-[#eb0029] cursor-pointer md:w-[24rem]  h-[20rem] rounded-xl  py-5 admin-header relative  ">
                          <img
                            src={phone}
                            alt="m"
                            className=" w-24 h-24 mx-auto mt-4 transition-transform transform hover:scale-150 duration-500 "
                          />

                          <div className="  text-center  mt-9 ">
                            <h1 className="font-bold text-2xl  mt-4">
                          Phone number
                            </h1>
                            <p className="text-xl mt-4 text-black">
                              974-5661355
                            </p>
                          </div>
                        </div>
                        </a>

                        <div className="bg-white hover:border hover:border-[#eb0029] md:w-[24rem] cursor-pointer h-[20rem] rounded-xl  py-5 admin-header relative  ">
                          <img
                            src={clock}
                            alt="m"
                            className=" w-24 h-24 mx-auto mt-4 transition-transform transform hover:scale-150 duration-500 "
                          />

                          <div className=" text-center mt-9 ">
                            <h1 className="font-bold text-2xl  mt-4">
                          Opening Time
                            </h1>
                            <p className="text-xl mt-4 text-black">
                             Mon-Frid:9am-9pm
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
                </section>



    {/* section map */}

    <section className='p-6 mt-16  w-full object-cover  '>
    <div className=''>
    <iframe title='sasurali map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8702323225525!2d85.37132407556038!3d27.690405376192324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b4677f70b01%3A0xa8f25b94bc35b5b2!2zU2FzdXJhbGkgUmVzdHJvIOCkuOCkuOClgeCksOCkvuCksuClgA!5e0!3m2!1sen!2snp!4v1692270845431!5m2!1sen!2snp" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
</div>
{/* contact-form */}
<div className=' admin-header border border-r-4  text-center mb-6  w-full p-10 md:w-[90%] md:p-20  md:mx-20 mt-10   '>
<h1 className=' md:text-3xl text-2xl font-bold mb-4'>Send Us Message</h1>
  <form action="" className='  gap-6 '>
  <div className='grid md:grid-cols-3 grid-cols-1  w-full '>
    <input type="text"placeholder='Your Name ' className='inputs admin-header  '/>
    <input type="tel"placeholder='Phone Number' className='inputs admin-header'/>
    <input type="text"placeholder='Subject ' className='inputs admin-header'/>

    <br/>
    </div>
    <input type="text"placeholder='Write Message' className=' w-[100%] p-16 mx-0 mb-6 admin-header text-center outline-none rounded-xl'  />
    <br></br>
   <button type="submit" className='bg-[#eb0029] text-white p-5  w-56 md:w-72  text-[16px] md:text-3xl rounded-[30px]' >Send Message</button> 
  </form>
</div>
    </section>


   
    <section className='mt-20'>
      <Footer/>
    </section>
</div>
  )
}
