import React, { useEffect, useState } from "react";
import fire from "../image/fire.png";
import { getDocs } from "firebase/firestore";
import { specialFood } from "../firebase";

const Specialmenu = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const dataDb = await getDocs(specialFood);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex md:flex-row flex-col   justify-center w-full  lg:gap-[40px]  place-items-center gap-[5px] sm:gap-2">
        {data.map((item, id) => (
          <div
            key={`${item}.${id}`}
            className="bg-white  w-full   p-10 md:w-[28rem] h-[32rem] rounded-xl py-5 admin-header relative      "
          >
            <div className="Show">
              <img
                src={item.photo}
                alt={item.title}
                className="w-72 h-72  mx-auto rounded-full object-center  image-spin transition-all"
              />

              <div className="text-center mt-2">
                <h1 className="h1 leading-10">{item.foodName}</h1>
                <p className="text-2xl font-bold pt-2 text-gray-500  truncate">
                  {item.description}
                </p>
                <h2 id="spanh1" className=" pt-2">Rs:{item.price}</h2>
              </div>
            </div>

            <div className="hides">
              <img src={fire} alt="fire" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Specialmenu;