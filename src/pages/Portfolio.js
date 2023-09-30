import React, { useContext } from "react";

// import img
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container  mx-auto h-full relative">
        {/* text & image wrapper */}
        <div
          className=" flex flex-col lg:flex-row 
        h-full items-center text-center justify-start gap-x-24 lg:text-left 
        lg:pt-24 pt-36 pb-8"
        >
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1"> Portfolio</h1>
            <p className="mb-12 max-w-sm ">
              Lorem Ipsum is a method of text writing in{" "}
              <b>publishing and graphic design </b>commonly used to illustrate
              the visual appearance of a document.
              <br />
              <br />
              Lorem Ipsum is a method of text writing in publishing and graphic
              design commonly.
            </p>
            {/* btn */}
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Here me
            </Link>
          </motion.div>
          {/* start img grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* image */}
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
          {/* end img grid */}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
