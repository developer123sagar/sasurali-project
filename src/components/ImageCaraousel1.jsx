import React, { useEffect, useRef } from "react";

const ImageCarousel1 = ({ ImageWidth, ImageHeight, Images, divWidth }) => {
  const sliderRef = useRef(null);
  const containerWidth = 500; // Adjust this based on your container width
  const scrollDistance = 5; // Adjust this based on your desired scroll increment
  const scrollIntervalDelay = 60; // Adjust this based on your desired delay

  useEffect(() => {
    let scrollAmount = 0;
    let scrollingRight = true;

    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += scrollingRight
          ? scrollDistance
          : -scrollDistance;
        scrollAmount += scrollDistance;

        if (scrollAmount >= containerWidth) {
          scrollingRight = !scrollingRight;
          scrollAmount = 0;
        }
      }
    }, scrollIntervalDelay);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <>
      <div
        ref={sliderRef}
        className="w-full h-full text-white overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide  relative"
      >
        {Images &&
          Images.map((item, id) => (
            <div
              key={id}
              className={`w-[160px] sm:w-[200px] md:w-[160px] lg:w-[${divWidth}] inline-block relative`}
            >
              <img
                src={item.img}
                alt="Food"
                // className="w-[160px] h-[200px] object-cover block rounded"
                className={`w-[${ImageWidth}] h-[${ImageHeight}] object-cover block rounded `}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageCarousel1;
