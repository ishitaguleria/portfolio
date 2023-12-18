import "./navbar.css"
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion"
const NavBar = () =>{
    return(
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
                PORTFOLIO
            </motion.span>  
            <div className="social">
                <a href="#"><img src= "/insta.png" alt="Insta Logo"   className="images" /></a>
                <a href="https://github.com/ishitaguleria"><img src= "/github.png" alt="Github Logo" className="images" /></a>                
            </div>  
        </div>
    </div>
    )
}
export default NavBar