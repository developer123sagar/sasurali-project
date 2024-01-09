import "../css/home.css";
import "../css/bootstrap.min.css";
import {Helmet} from "react-helmet";
import {
  Footer,
  FoodAnimation,
  Menuitem,
  Specialmenu,
  Expertschef,
  Banner,
} from "components";

import redchilli from "../image/redchilli.png";

import popularfood2 from "../image/pouplarfood2.png";
import {
  about_animation,
  about_animation2,
 
  drinks1,
  food1,
  drinks2,
  drinks3,
} from "image";
import sasurali_image1 from "image/sasurali_image1.JPG";

export const Home = () => {
  return (
    <>
      <div className="h-full w-screen mt-[80px] font-extra overflow-x-hidden overflow-y-hidden ">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home </title>
             
            </Helmet>
        <FoodAnimation />

        <div className="pt-10 light-gray-bg px-5">
          <section>
            <div>
              <div className="absolute">
                <div class="shape-mockup hidden  sm:block   animated-image  ">
                  <img src={popularfood2} alt="shape2" />
                </div>
              </div>

              <div className="text-center my-16  md:text-[24px] ">
                <h1
                  id="spanh1"
                  className="font-semibold  font-extra  text-2xl leading-[30px] "
                >
                  {" "}
                  Best Food Menu
                </h1>
                <h1 className="h1 font-extra md:text-[32px]">
                  {" "}
                  Our Popular Food Items
                </h1>
              </div>

              <div className="flex gap-10">
                <Specialmenu />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION STARTS HERE */}
          <section>
            <div>
              {" "}
              <img
                src={redchilli}
                alt="animation"
                className=" w-[10rem]  animated-image    absolute"
              />
            </div>
            <div className="grid   grid-cols-1 md:grid-cols-2 gap-20 md:gap-24  mt-8 mb-24">
              <div className="flex ">
                <div className="flex mr-4  items-center flex-row ">
                  <img
                    src={about_animation}
                    alt="img1"
                    className=" object-contain h-[18rem] md:h-[20rem] "
                  />
                </div>
                <div className="flex ">
                  <img
                    src={drinks1}
                    alt="img2"
                    className="animate-pulse  h-[18rem] md:h-[36rem] object-cover  "
                  />
                </div>
              </div>

           
                <div className=" md:mr-12  ">
                  <h1
                    id="spanh1"
                    className="leading-[30px] text-left md:text-center"
                  >
                    About Sasurali
                  </h1>
                  <h1 className="h1 md:text-[32px] text-5xl mt-4 leading-[36px] ">
                  "ससुराली: नेपालको आन्तरिक रसको संग्रहालय"
                  </h1>
                  <p className="mt-4 text-black text-justify">
                  ससुराली एक प्रमुख भोजनालय हो जसले नेपालको आन्तरिक रस र संस्कृतिलाई जिवनमा उतार्दैछ। यस स्थलमा हाम्रो ससुरालको जस्तो आराम्भिक सुख, पर्वको उत्सव, र सानो-सानो खुशिहरूको मिलनसर महसुस हुन्छ।
                  </p>
                  <div className="w-full flex flex-row  gap-10   justify-center items-center mt-4    ">
                    <div className="bg-white   hover:border hover:border-[#eb0029]  w-full md:w-[400px]   h-36 md:h-60  admin-header relative rounded   ">
                      <img
                        src={food1}
                        alt="burger"
                        className="  mx-auto md:h-60 h-36 w-full   "
                      />
                    </div>
                    <div className="bg-white   hover:border hover:border-[#eb0029]  w-full md:w-[400px] h-36 md:h-60  admin-header relative rounded   ">
                      <img
                        src={drinks2}
                        alt="burger"
                        className="h-36 md:h-60 w-full mx-auto   "
                      />
                    </div>
                    <div className="bg-white   hover:border hover:border-[#eb0029] w-full md:w-[400px] h-36 md:h-60  admin-header relative rounded   ">
                      <img
                        src={about_animation2}
                        alt="burger"
                        className="  md:h-60 h-36 mx-auto w-full   "
                      />
                    </div>
                    <div className="bg-white   hover:border hover:border-[#eb0029]  w-full md:w-[400px]   h-36 md:h-60  admin-header relative rounded   ">
                      <img
                        src={drinks3}
                        alt="burger"
                        className="  mx-auto md:h-60 h-36 w-full   "
                      />
                    </div>
                  </div>
                </div>
          
      
            </div>
          </section>

          {/* Bannerimage */}

          <section>
            <Banner />
          </section>

          {/* 
              MENUITEMS */}
          <section>
            <Menuitem />
          </section>

          {/* Expert chef */}

          <section>
            <Expertschef />
          </section>

          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 md:mx-6 gap-20 md:gap-24 md:h-[30rem] mt-24 ">
              <div className="flex   ">
                <img
                  src={sasurali_image1}
                  alt="img1"
                  className=" rounded-2xl w-full  object-cover md:h-[30rem]  "
                />
                
              </div>
              <div>
                <div className="md:mr-12 md:h-[30rem] ">
                  <h1 id="spanh1" className="md:text-[24px] text-center">
                    About Sasurali
                  </h1>
                  <h1 className="h1 md:text-[32px] mt-4">
                    We make sure Quality & Healthy Foods
                  </h1>
                  <p className="mt-4 text-black text-justify">
                    The interior decor of Sasurali pays homage to the traditions
                    and heritage of [Cuisine Type] cuisine. Intricate artwork,
                    handcrafted wooden furniture, and soft lighting create an
                    ambiance that transports you to the heart of [Cultural
                    Influences]. The attention to detail in the decor reflects
                    the same dedication to craftsmanship found in the kitchen.
                    
                    
                    </p>
                </div>
              </div>
            </div>
          </section>

          {/* food-carousel */}
          
        </div>
        <section>
        <Footer />
      </section>
      </div>
    </>
  );
};
