import React, { useContext } from "react";

// import img
import WomanImg from "../img/about/about.png";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// transition1
import { transition1 } from "../transitions";

// import cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & image wrapper */}
        <div
          className=" flex flex-col lg:flex-row 
        h-full items-center text-center justify-center gap-x-24 lg:text-left 
        lg:pt-16"
        >
          {/* image */}
          <div
            className="flex-1 max-h-96 lg:max-h-max 
          order-2 lg:order-none overflow-hidden rounded-r-[30px]"
          >
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 ob-14 lg:pt-0 lg:w-auto z-10 
          flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">Aboute Me</h1>
            <p className="mb-12 max-w-sm  ">
              Lorem Ipsum is a method of text writing in{" "}
              <b>publishing and graphic design </b>commonly used to illustrate
              the visual appearance of a document.
              <br />
              <br />
              Lorem Ipsum is a method of text writing in publishing and graphic
              design commonly.
            </p>
            <Link to={"/portfolio"} className="btn mx-auto">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
