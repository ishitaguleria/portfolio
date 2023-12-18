import "./Avatar.css"
import { motion } from "framer-motion";
const textVariants ={
  initial: {
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
       duration:1,
       staggerChildren:0.1,
    },
  },
};

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="textwrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>ISHITA</motion.h2>
        <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
      </motion.div>
      </div>
      <div className="imageContainer">
            <img src="/avatar.png" alt="">
            </img>
        </div>

      
        
    </div>
  )
}

export default Avatar