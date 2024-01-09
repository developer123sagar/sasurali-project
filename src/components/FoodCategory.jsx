const FoodCategory = ({ data }) => {
  return (
    <>
      {data.map((item, id) => (
        <div
          key={`${item}..${id}`}
          className="md:flex gap-12 mt-10 bg-white w-[55rem]  admin-header p-8 md:ml-24 rounded border border-dashed border-gray-300"
        >
          <div className="rounded-full overflow-hidden bg-black  w-44 h-44 border-4 border-red-600 mx-auto md:mx-0">
            <img
              src={item.photo}
              alt={item.foodName}
              className="w-full h-full mx-auto"
            />
          </div>
          <div className="flex flex-col justify-between  md:flex-row md:items-center md:w-3/4">
            <div>
              <h1 className="text-[24px] mt-10 text-center w-full  font-semibold">
                {item.foodName}
                <span className=" hidden md:inline">...........</span>
              </h1>
              <p className="mt-3 text-2xl text-[#4d5765] text-center md:text-left">
                {item.description}
              </p>
            </div>

            <div className="mt-6 flex justify-center md:mt-0">
              <h1 className="bg-[#eb0029] bg-opacity-10 text-[#eb0029] font-bold text-2xl p-3 w-44 text-center rounded pr-5">
                Rs {item.price}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodCategory;
