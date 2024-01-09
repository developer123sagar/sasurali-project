
import "../css/footer.css";
import "../css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { siliconlogo, logo, captionimage } from "../image/index";
// import {breakfast,drinks,launch,snacks} from '../data';
import { FaRegMap, FaTiktok } from "react-icons/fa";

import {
  BiLogoFacebook,
  BiLogoInstagram,
 
  BiSolidPhoneCall,
} from "react-icons/bi";


export const Footer = () => {
 
  

  return (
    <div className="admins-header    relative flex w-full flex-col gap-16">
      <div className="flex flex-col md:flex-row md:gap-60 lg:mx-44 md:pt-14 ">
        <div className="md:col-span-1 bg-white admin-header flex basis-[44%] w-full h-auto mx-auto justify-center py-10 md:py-0  ">
          <div className=" mt-3  ">
            <img
              src={logo}
              alt="sasurali-logo"
              srcset=""
              className=" mb-6  md:w-[40%] w-[14rem] mx-auto  "
            />

            <div class="circle">
              <img src={captionimage} alt="" srcset="" className="w-full " />
            </div>

            <h1 className="customh1 text-center flex justify-center">
              Follow us
            </h1>
            <div className="flex pt-2 pb-1 md:pb-6    justify-center gap-12  ">
              <a
                href="https://www.facebook.com/sasuralii/" target="_blank" rel="noreferrer"
                className="socialmedia bg-blue-600 "
              >
                <BiLogoFacebook color="white" size={18} />
              </a>

              <a
                href="https://www.instagram.com/sasuraliktm/" target="_blank" rel="noreferrer"
                className="socialmedia bg-red-600"
              >
                <BiLogoInstagram color="white" size={18} />
              </a>
             
              <a href="https://www.tiktok.com/@sasuraliktm" target="_blank" rel="noreferrer" className="socialmedia bg-white admin-header">
                <FaTiktok color="black" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0  w-full  ">
          <div className="flex md:gap-72 gap-1 md:flex-row flex-col mx-20 md:mx-0 ">
            <div className="flex flex-col md:flex-row gap-3   ">
              <div className="md:mt-10 flex justify-center">
                <FaRegMap size={36} color="#007bff" />
              </div>
              <div>
                <h1 className="customh1 lg:text-[20px] text-center text-black">
                  Dibyeshwori planning
                  <br />
                </h1>
                <p className="text-[12px] lg:text-[16px] text-black md:leading-5 text-center ">
                  Pepsicola,Kathmandu
                </p>
              </div>
            </div>

            <div className=" flex flex-col md:flex-row md:gap-1 ">
              <div className="md:mt-10 mt-4 flex justify-center">
                <BiSolidPhoneCall size={36} color="#007bff" />
              </div>
              <div>
                <h1 className="customh1 text-center lg:text-[20px]">
                  974-5661355
                </h1>
                <p className="text-[12px] text-black md:leading-5 text-center lg:text-[16px]">
                  Call us
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:gap-[30rem]  gap-1 flex-col md:flex-row md:mt-20 md:mx-0 mx-20">
            <div>
              <h1 className="customh1 text-center lg:text-[20px]">
                Useful Links
              </h1>
              <span class="animate-border borde  mx-auto "></span>
              <div className="mx-6  text-3xl font-semibold ">
                <div className="flex md:flex-col flex-row gap-10 text-[14px] text-black mt-8 justify-center">
                  <a href="/" className="hover:no-underline text-center">
                    Home
                  </a>

                  <a href="/About" className="hover:no-underline text-center">
                    About
                  </a>

                  <a href="/Contact" className="hover:no-underline text-center">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="customh1 text-center lg:text-[20px] ">
                Powered by
              </h1>
              <span class="animate-border borde mx-auto"></span>
              <img
                src={siliconlogo}
                alt="silicon-logo"
                srcset=""
                className="h-28 w-[16rem] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer subscription */}
      <div className=" w-full text-[#fff] mt-12  bg-black absolute bottom-0 left-0 p-6">
        <div className="flex md:justify-between justify-center  md:mx-20">
          <h1 className="  text-center  text-2xl">
            Sasurali Restaurant . All Rights Reserved.
          </h1>
          <Link to={"/terms"} className="hover:no-underline">
            {" "}
            <h1 className="mr-10 pointer md:block  hidden">Privacy Policy</h1>
          </Link>
        </div>
      </div>
      {/* messenge chat plugin code  */}
      {/* <div id="fb-root"></div>

      <div id="fb-customer-chat" class="fb-customerchat"></div> */}
        
    </div>
  );
};
