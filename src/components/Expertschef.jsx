import React, { useEffect, useRef, useState } from "react";
import { animation1, animation2 } from "../image/index";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getDocs } from "firebase/firestore";
import { chef } from "../firebase";

const Expertschef = () => {
  const sliderRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    const dataDb = await getDocs(chef);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
    allData.length > 4 ? setShowArrow(true) : setShowArrow(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleScrollClick = (direction) => {
    const width = window.innerWidth;

    const newScrollDistance =
      direction === "right" ? scrollDistance + width : scrollDistance - width;
    setScrollDistance(newScrollDistance);
    sliderRef.current.scrollTo({
      left: newScrollDistance,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        <img
          src={animation1}
          alt="animation"
          className="absolute hidden sm:block  animated-image w-24 left-48"
        />
      </div>
      <div className="flex items-center absolute left-0 right-0 mt-[244px] z-10  ">
        <button
          className=" ml-10  w-[20px] p-2 rounded "
          onClick={() => handleScrollClick("left")}
        >
          <MdChevronLeft
            size={30}
            style={{ color: "white" }}
            className={`${
              showArrow ? "block" : "hidden"
            } bg-black color-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 top-10 `}
          />
        </button>
        <button
          className=" p-2 w-[20px] rounded ml-auto "
          onClick={() => handleScrollClick("right")}
        >
          <MdChevronRight
            size={30}
            style={{ color: "white" }}
            className={`${
              showArrow ? "block" : "hidden"
            } bg-black rounded-full  absolute opacity-50 hover:opacity-100 cursor-pointer z-10  top-10   right-0`}
          />
        </button>
      </div>
      <div className="pb-20 mt-28 ">
        <div className="text-center">
          <span id="spanh1" className=" md:text-[24px]">
            Expert Chef
          </span>
          <h1 className="h1 md:text-[32px]">Meet our expert chefs</h1>
        </div>

        <div
          className="w-full h-full  flex md:mx-6 md:flex-row gap-6  flex-col  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative mt-10 mx-"
        ref={sliderRef}
        >
          {data.map((chef, id) => (
            <div
              key={`${chef.name}..${id}`}
              className="relative group w-full  md:w-[300px]  h-[320px]  "
            >
              <img
                src={chef.photo}
                alt=""
                className="w-full  md:w-[300px] h-[320px] object-cover flex     "
              />

              <div className="absolute inset-0 overflow-hidden">
                <div className="bg-[#454545]/20 w-0 h-full absolute left-0 top-0 transition-all duration-300 ease-in-out group-hover:w-full "></div>
                <div className="bg-[#454545]/20 w-0 h-full absolute  top-0 transition-all duration-300 ease-in-out group-hover:w-full z-10 "></div>
              </div>

              <div className="team hidden group-hover:block absolute bottom-0  z-10  w-full ">
                <div className=" border  z-30 w-full  h-auto opacity-80  admin-header">
                  <div className="text-center">
                    <span className="text-[#eb0029] bg-[#7ec63e] px-3  font-bold z-60  opacity-100 inline-block mb-2">
                      {chef.role}
                    </span>
                    <h1 className="font-bold text-4xl mb-4">{chef.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src={animation2}
            alt="animation"
            className="absolute animated-image w-24 z-2 right-[20px] "
          />
        </div>
      </div>
    </>
  );
};

export default Expertschef;
