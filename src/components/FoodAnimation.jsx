import { useState, useEffect, useMemo, useRef } from "react";
import { useSprings, animated, useSpring } from "react-spring";



const FoodAnimation = () => {
  const parts = [10, 9, 6, 7, 8, 5, 4, 3, 2, 1];
  const images = useMemo(() => ["burger_part", "burger_part_2"], []);

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const textContent = [
    // "The Healthy Burger For Your Kids",
    // "Enjoy your favorite food with family",
  ];

  const [textSpringProps, setTextSpring] = useSpring(() => ({
    config: { duration: 800 },
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  }));

  // starting positions
  const startPositions = [
    { x: 200, y: -200 },
    { x: -200, y: 200 },
    { x: -200, y: -200 },
    { x: 200, y: 200 },
    { x: 150, y: 150 },
    { x: 150, y: 150 },
    { x: 100, y: 250 },
    { x: 150, y: 150 },
    { x: -150, y: -150 },
    { x: 150, y: -150 },
  ];

  const springs = useSprings(
    parts.length,
    parts.map((part, index) => ({
      from: {
        opacity: 0,
        transform: `translate3d(${startPositions[index].x}px, ${startPositions[index].y}px, 0)`,
      },
      to: async (next, cancel) => {
        await next({ opacity: 1, transform: "translate3d(0px, 0px, 0)" });
      },
      delay: 80 * index,
      config: { duration: 2500 },
      reset: true,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
      setCurrentIndex((prev) => (prev + 1) % textContent.length);
      setTextSpring({
        from: { opacity: 0, transform: "translateX(100px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
      });
    }, 4500 + 80 * (parts.length - 1));
    return () => clearInterval(interval);
  }, [images, parts.length, textContent.length, setTextSpring]);

  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    setResetAnimation(true);
  }, [currentIndex]);

  useEffect(() => {
    if (resetAnimation) {
      setResetAnimation(false);
    }
  }, [resetAnimation]);

  const textSpring = useSpring({
    from: { transform: "translate3d(100px,0,0)" },
    to: { transform: "translate3d(0px,0,0)" },
    delay: 100,
  });

  const getImageStyles = (index) => {
    let zIndex = parts.length - index;
    let screenWidth = window.innerWidth;

    // Define styles for different screen sizes
    let sizeLarge = {
      0: { width: "180px", height: "120px", top: "0px", left: "50px" },
      1: { width: "220px", height: "100px", top: "60px", left: "20px" },
      2: { width: "120px", height: "50px", top: "120px", left: "120px" },
      3: { width: "100px", height: "40px", top: "140px", left: "50px" },
      4: { width: "100px", height: "40px", top: "100px", left: "0px" },
      5: { width: "210px", height: "80px", top: "150px", left: "40px" },
      6: { width: "230px", height: "80px", top: "210px", left: "30px" },
      7: { width: "80px", height: "40px", top: "240px", left: "10px" },
      8: { width: "290px", height: "100px", top: "220px", left: "10px" },
      9: { width: "230px", height: "120px", top: "270px", left: "40px" },
    };

    let sizeSmall = {
      0: { width: "100px", height: "70px", top: "0px", left: "25px" },
      1: { width: "120px", height: "60px", top: "30px", left: "10px" },
      2: { width: "70px", height: "35px", top: "60px", left: "60px" },
      3: { width: "60px", height: "30px", top: "70px", left: "25px" },
      4: { width: "60px", height: "30px", top: "50px", left: "0px" },
      5: { width: "115px", height: "50px", top: "75px", left: "20px" },
      6: { width: "125px", height: "50px", top: "105px", left: "15px" },
      7: { width: "50px", height: "30px", top: "120px", left: "5px" },
      8: { width: "155px", height: "60px", top: "110px", left: "5px" },
      9: { width: "125px", height: "60px", top: "135px", left: "20px" },
    };

    // Determine which styles to use based on screen width
    let sizeStyles = screenWidth >= 1024 ? sizeLarge : sizeSmall;

    return {
      position: "absolute",
      zIndex,
      ...sizeStyles[index],
    };
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    if (image) {
      image.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({
      x: (clientX - window.innerWidth / 2) / 20,
      y: (clientY - window.innerHeight / 2) / 20,
    });
  };

  const imgSpring1 = useSpring({
    reset: resetAnimation,
    from: { transform: "translate3d(200%, -200%, 0)" },
    to: { transform: "translate3d(0%, 0%, 0)" },
    config: { duration: 1200 },
  });

  const imgSpring2 = useSpring({
    reset: resetAnimation,
    from: { transform: "translate3d(-200%, 200%, 0)" },
    to: { transform: "translate3d(0%, 0%, 0)" },
    config: { duration: 1400 },
  });

  const imgSpring3 = useSpring({
    reset: resetAnimation,
    from: { transform: "translate3d(-200%, -200%, 0)" },
    to: { transform: "translate3d(0%, 0%, 0)" },
    config: { duration: 1600 },
  });

  const imgSpring4 = useSpring({
    reset: resetAnimation,
    from: { transform: "translate3d(200%, 200%, 0)" },
    to: { transform: "translate3d(0%, 0%, 0)" },
    config: { duration: 1800 },
  });

  const imgSpring5 = useSpring({
    reset: resetAnimation,
    from: { transform: "translate3d(200%, 200%, 0)" },
    to: { transform: "translate3d(0%, 0%, 0)" },
    config: { duration: 2000 },
  });

  return (
    <div onMouseMove={handleMouseMove} className="relative hero-home pt-6">
      <div className="flex justify-between items-center md:pt-56 pt-10 px-5 lg:px-60">
        <animated.div
          style={{ textSpring, ...textSpringProps }}
          className="basis-[80%] sm:basis-[40%]"
        >
          <h1 className="lg:text-[50px] text-[25px]    font-extrabold home-title  text-white">
          तपाईलाई ससुराली रेस्टुरेन्टमा स्वागत छ

          </h1>
          <p className="heading-home lg:my-8 text-[25px] lg:text-6xl w-fit">
            {textContent[currentIndex]}
          </p>
        
        </animated.div>

        <section className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mt-[10rem] lg:mt-0 md:ml-[6rem] relative">
          {springs.map((props, index) => {
            const imageUrl = `https://themeholy.com/html/pizzan/demo/assets/img/update_2/hero/${currentImage}_${parts[index]}.png`;

            const img = new Image();
            img.src = imageUrl;

            // Check if the image URL is available
            if (img.complete) {
              return (
                <animated.img
                  key={parts[index]}
                  src={imageUrl}
                  alt=""
                  style={{
                    display: "block",
                    objectFit: "fill",
                    ...getImageStyles(index),
                    ...props,
                  }}
                />
              );
            } else {
              // Return null if the image URL is not available
              return null;
            }
          })}
        </section>
      </div>
      <div ref={imgRef}>
        <animated.img
          style={imgSpring1}
          className="w-16 absolute lg:bottom-[0rem] bottom-[5rem] left-[25rem]lg:left-[50rem]"
          src="https://themeholy.com/html/pizzan/demo/assets/img/update_2/hero/tomato_6.png"
          alt=""
        />
        <animated.img
          style={imgSpring2}
          className="w-16 absolute bottom-[29rem] left-[2rem] lg:bottom-[36rem] lg:left-[14rem]"
          src="https://themeholy.com/html/pizzan/demo/assets/img/update_2/hero/tree_2.png"
          alt=""
        />
        <animated.img
          style={imgSpring3}
          className="w-20 absolute bottom-[36rem] right-[20rem]"
          src="https://themeholy.com/html/pizzan/demo/assets/img/update_2/hero/hero_shape_1.png"
          alt=""
        />
        <animated.img
          style={imgSpring4}
          className="w-24 absolute bottom-[4rem] sm:bottom-[20rem] right-[23rem] sm:right-[40rem] lg:bottom-[30rem] lg:right-[80rem]"
          src="https://themeholy.com/html/pizzan/demo/assets/img/update_2/hero/hero_shape_2.png"
          alt=""
        />
        <animated.img
          style={imgSpring5}
          className="w-24 absolute bottom-[10rem] sm:right-[40rem] right-[17rem] lg:right-[60rem]"
          src="https://themeholy.com/html/pizzan/demo/assets/img/update_2/hero/hero_shape_3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FoodAnimation;
