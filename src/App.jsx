
import './App.css'
import Avatar from './components/avatar/Avatar';
//import Test from './Test';
import NavBar from './components/navbar/navbar';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    
    <section id="Homepage"> 
      <NavBar/>
      <Avatar/> 
    </section>
    <section id="Skills"> <Parallax type="skills"/> </section>
    <section> Skills </section>
    <section id="Projects"> <Parallax type="projects"/> </section>
    <section> Projects </section>
    <section id="Courses"> <Parallax type="courses"/> </section>
    <section> Courses </section>
    <section id="Resume"> <Parallax type="resume"/> </section>
    <section> Resume</section>
    <section id="Contact"> <Parallax type="contact"/> </section>
    <section> Contact </section>

    {/*<Test/>
    <Test/>*/}
  </div>;
}

export default App;
