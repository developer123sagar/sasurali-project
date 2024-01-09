import React, { useEffect, useState } from "react";
import "../css/home.css";
import { food } from "../firebase";
import { getDocs } from "firebase/firestore";
import FoodCategory from "./FoodCategory";
import {drinks2, breakfast, snacks, launch } from "../image/index";

const Menuitem = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Breakfast");

  const specialItem = [
    {
      name: "Breakfast",
      image: breakfast,
    },
   
    {
      name: "Lunch",
      image: launch,
    },
    {
      name: "Snacks",
      image: snacks,
    },
    {
      name: "Drinks",
      image: drinks2,
    },
  ];

  const getData = async () => {
    const dataDb = await getDocs(food);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    console.log(allData)
    const filterData = allData.filter((item) => item.type === "selectedTab");
    console.log(data.length)
    setData(filterData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "Breakfast":
        return <FoodCategory data={data} />;
      case "Snacks":
        return <FoodCategory data={data} />;
      case "Drinks":
        return <FoodCategory data={data} />;
      case "Lunch":
        return <FoodCategory data={data} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const getData = async () => {
      const dataDb = await getDocs(food);
      const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
      const filterData = allData.filter((item) => item.type === selectedTab);
      setData(filterData);
    };
    getData();
  }, [selectedTab]);

  console.log(data.length)

  return (
    <>
      <section className="mt-16">
        <div>
          <div className="text-center mt-6 ">
            <h1 id="spanh1" className=" md:text-[24px] ">
              Best Food Menu
            </h1>

            <h1 className="h1 md:text-[32px]">Our Best foods menus</h1>
          </div>

          <div>
            <div className="flex items-center  md:justify-center justify-center md:gap-60  gap-16 md:mx-24 my-12">
              {specialItem.map((item, index) => (
                <div
                  onClick={() => handleTabClick(item.name)}
                  key={`${item}...${index}`}
                  className="cursor-pointer  flex items-center  flex-col"
                >
                  <img
                    src={item.image}
                    alt="food"
                    className="mx-3 h-16 w-16 md:h-36  md:w-36 object-cover "
                  />
                  <div className="mt-4">
                  <h1 className="font-bold  bg-red-600 hover:bg-black rounded justify-center text-[8px] md:h-12 md:w-44 h-8 w-24 md:text-2xl text-white  flex items-center text-center">
                    {item.name}
                   
                  </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen min-h-full  mb-12">
        <div className="flex  flex-wrap">{renderComponent()}</div>
      </div>
    </>
  );
};

export default Menuitem;
