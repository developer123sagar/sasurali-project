import "../css/home.css";
import { Footer } from "../components/Footer";
import sasurali2 from "../image/sasurali2.JPG";
import redchilli from "../image/redchilli.png";
import { Helmet } from "react-helmet";
import aboutbanner from "../image/aboutbanner.JPG";

import { drinks1 } from "image";
import { sasurali_image1, sasurali_image3, Sasurali3 } from "image";

import { about_animation, banner2 } from "../image/index";

function About() {
  return (
    <div className="mt-36">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative ">
        <img
          src={sasurali2}
          alt=""
          className="  w-full md:h-[40rem] h-[20rem] top-10   object-cover "
        />
        <span className="absolute md:bottom-[20rem] bottom-[8rem]  flex mx-4   bg-[#8f3035] bg-opacity-70 md:w-80   md:h-20 p-2  rounded-xl text-center bg text-white font-extrabold text-2xl md:text-6xl justify-center md:justify-start">
          {" "}
          About us
        </span>
      </div>

      {/* About section here */}

      {/* HOTEL CARDS STATRS HERE */}
      <section className="mt-20 mb-10 ">
        <div>
          {" "}
          <img
            src={redchilli}
            alt="animation"
            className=" w-[10rem]  animated-image    absolute"
          />
        </div>
        <div className="grid   grid-cols-1 md:grid-cols-2 gap-20 md:gap-24  mx-10   ">
          <div>
            <div>
              <h1
                id="spanh1"
                className="leading-[30px]  text-center"
              >
                About Sasurali
              </h1>
              <h1 className="color-[#010f1c] text-[20px] font-extrabold  md:text-[32px]  mt-4  text-center  ">
              "Sasurali's Authentic Flavors"
              </h1>
              <p className="mt-4 text-black text-justify">
                "Sasurali Restaurant," nestled in the tranquil setting of
                Dibyeswori Planning, is a delightful haven for families. This
                restaurant offers delectable cuisine and a warm ambiance,
                ensuring that families can thoroughly enjoy their time
                together.Sasurali Restaurant provides a loving experience for
                families, with its emphasis on freshness, delicious food, and a
                captivating atmosphere. It's a place where families can
                rejuvenate and create cherished moments. 
              </p>
              <div className="w-full flex flex-row  gap-10   justify-center items-center mt-4    ">
                <div className="bg-white   hover:border hover:border-[#eb0029]  w-full md:w-[400px]   h-36 md:h-60  admin-header relative rounded   ">
                  <img
                    src={sasurali_image1}
                    alt="burger"
                    className="  mx-auto md:h-60 h-36 w-full   "
                  />
                </div>
                <div className="bg-white   hover:border hover:border-[#eb0029]  w-full md:w-[400px] h-36 md:h-60  admin-header relative rounded   ">
                  <img
                    src={Sasurali3}
                    alt="burger"
                    className="h-36 md:h-60 w-full mx-auto   "
                  />
                </div>
                <div className="bg-white   hover:border hover:border-[#eb0029] w-full md:w-[400px] h-36 md:h-60  admin-header relative rounded   ">
                  <img
                    src={sasurali_image3}
                    alt="burger"
                    className="  md:h-60 h-36 mx-auto w-full   "
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/375598774_615565247359849_1759370412970376962_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=813123&_nc_ohc=O977ll60mYUAX_Pu6WS&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCgT3ikoyLmg3L5LXmqhJT6hVTTAXMFsZl6Z0klZgce_A&oe=6501BD65"
              alt=""
              srcset=""
              className="md:h-full h-[20rem] w-full object-center  rounded"
            />
          </div>
        </div>
      </section>

      {/* Banner part start here */}
      <section>
        <div className="py-12 relative ">
          <div className="">
            <img
              alt="banner3"
              src={banner2}
              className=" w-full bg-center   h-[32rem] md:h-[35rem]  object-cover"
            />
          </div>
          <div className="capitalize absolute top-28  md:top-44  text-center md:mx-10 md:text-left  max-w-5xl gap-10 md:gap-0 ">
            <h1
              id="spanh1"
              className="capitalize  mb-5 text-center font-extra "
            >
              Welcome to Sasurali Resto
            </h1>
            <h1 className="spanh2 text-center font-extra md:mb-5 mb-2 md:leading-[5rem]">
              Your Destination for Healthy Food
            </h1>
            <h1 className="text-[14px] font-semibold  text-center text-white mx-3 md:mx-0  leading-[24px] font-extra ">
              At Sasurali Restro, we are committed to providing you with a
              dining experience that not only tantalizes your taste buds but
              also promotes your well-being. Our health food offerings are
              designed to cater to your nutritional needs without compromising
              on flavor.
            </h1>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default About;
