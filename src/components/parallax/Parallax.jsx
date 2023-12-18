import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.css";

const Parallax = ({ type }) => {
  let headingText = "";

  // Conditionally set the heading based on the type prop
  switch (type) {
    case "skills":
      headingText = "Skills";
      break;
    case "projects":
      headingText = "Projects";
      break;
    case "courses":
      headingText = "Courses";
      break;
    case "resume":
      headingText = "Resume";
      break;
    case "contact":
      headingText = "Contact";
      break;
    default:
      headingText = "Other";
      break;
  }
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="parallax" ref={ref}>
      <motion.h1 className="headtext" style={{ y: yBg }}>{headingText}</motion.h1>
      <div className="background-elements">
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{ y: yBg }}></motion.div>
        <motion.div className="stars" style={{ x: yBg }}></motion.div>
      </div>
    </div>
  );
};

export default Parallax;
