import React, { useEffect, useState } from "react";

import { Footer } from "../components/Footer";

import { food } from "../firebase";
import { getDocs } from "firebase/firestore";
// import FoodCategory from "./FoodCategory"

import { Helmet } from "react-helmet";
import Blogs from "../image/Blogs.jpg";
import { drinks2, breakfast, snacks, launch } from "../image/index";

import { blog } from "../firebase";
const specialItem = [
  {
    name: "Breakfast",
    image: breakfast,
  },
  {
    name: "Drink",
    image: drinks2,
  },
  {
    name: "Lunch",
    image: launch,
  },
  {
    name: "Snacks",
    image: snacks,
  },
];

export const Blog = () => {
  const [data, setData] = useState([]);
  const [breakfastData, setBreakfastData] = useState([]);
  const [snacksData, setSnacksData] = useState([]);
  const [lunchData, setLunchData] = useState([]);
  const [drinkData, setdrinkData] = useState([]);

  const getDatas = async () => {
    const dataDb = await getDocs(food);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    const breakfastData = allData.filter((item) => item.type === "Breakfast");
    setBreakfastData(breakfastData);
    console.log(breakfastData);
    const lunchData = allData.filter((item) => item.type === "Lunch");
    setLunchData(lunchData);
    const snacksData = allData.filter((item) => item.type === "Snacks");
    setSnacksData(snacksData);
    const drinkData = allData.filter((item) => item.type === "Drinks");
    setdrinkData(drinkData);
    console.log(drinkData)

    console.log(allData);
    const filterData = allData.filter((item) => item.type === "Breakfast");
    console.log(data.length);
    setData(filterData);
  };
  useEffect(() => {
    getDatas();
  }, []);

  // const initialData={meta-title="Discover Sasurali: Where Tradition Meets Flavor"}
  const [filterData, setFilterData] = useState([]);
  const getData = async () => {
    const dataDb = await getDocs(blog);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data.length);

  const handleBlog = (id) => {
    const filterData = data.filter((item) => item.id === id);
    setFilterData(filterData);
  };

  return (
    <>
      <div className="pt-24 ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog </title>
        </Helmet>
        <div className="relative ">
          <img
            src={Blogs}
            alt=""
            className="   w-full md:h-[40rem] h-[20rem] top-10   object-cover "
          />
          <span className="absolute md:bottom-[20rem] bottom-[8rem]  flex    bg-[#8f3035] bg-opacity-70 md:w-80   md:h-20 p-2  rounded-xl text-center bg text-white font-extrabold text-2xl md:text-6xl justify-center  mx-2 ">
            {" "}
            Blog
          </span>
        </div>

        <div className="flex md:flex-row flex-col gap-10  md:ml-10   w-full rounded mb-20">
          {/* 1st paert */}
          <div className=" admin-header bg-white rounded-3xl   mt-14  md:basis-[70%] ">
            <div className=" mx-10 my-10">
              <div>
                {filterData.length > 0
                  ? filterData.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.photo}
                          alt=""
                          srcset=""
                          className="md:h-[40rem] h-[20rem] w-full object-center rounded-2xl"
                        />
                        <h1 className="font-extrabold font-extra text-xl md:text-5xl mt-10 mb-3 ">
                          {item.title}
                        </h1>
                        <p className=" font-extra text-xl  mt-10 mb-3 text-black ">
                          {item.description}
                        </p>
                      </div>
                    ))
                  : data.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.photo}
                          alt=""
                          srcset=""
                          className="md:h-[40rem] h-[20rem] w-full object-center rounded-2xl"
                        />
                        <h1 className="font-extrabold font-extra text-xl  md:text-5xl mt-10 mb-1 ">
                          {item.title}
                        </h1>
                        <p className=" font-extra text-xl  mt-2 mb-3 text-black ">
                          {item.description}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div className=" basis-[30%] md:ml-10 w-full  md:mr-24">
            <div className=" p-4 md:p-0 ">
              <div className="admin-header rounded-2xl mt-14  pb-6 ">
                <h1 className="font-extrabold  text-center text-3xl pt-6 font-extra  ">
                  Categories
                </h1>

                <div >
                  {specialItem.map((item, index) => (
                    <div className=" flex admin-header p-4 rounded-xl  gap-10 my-10 mx-10 items-center justify-between">
                      <div className="flex gap-8 text-center items-center ">
                        {" "}
                        <img
                          src={item.image}
                          alt=""
                          className="mx-3 h-8 w-8 md:h-20  md:w-20 object-cover"
                        />
                        <h1 className="font-semibold text-2xl justify-start">
                          {item.name}
                        </h1>
                       
                      </div>
                      <em className="  font-semibold">{item.name === "Breakfast" ? breakfastData.length : item.name === "Snacks" ? snacksData.length :item.name === "Lunch" ? lunchData.length :item.name === "Drink" ? drinkData.length :null}</em>
                   
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl admin-header  mt-14   pb-6">
                <h1 className="font-extrabold text-3xl text-center pt-6 font-extra  ">
                  Recent Post{" "}
                </h1>

                <div>
                  {data.map((item, index) => (
                    <div
                      onClick={() => handleBlog(item.id)}
                      className="flex  w-[full] mx-10  gap-10 my-10"
                    >
                      <h1>
                        <img
                          src={item.photo}
                          alt="post"
                          className="w-44 h-24 rounded-3xl object-cover"
                        />
                      </h1>
                      <div>
                        <h1 className="font-semibold font-extra text-2xl w-full  ">
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};
