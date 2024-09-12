import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intrest from "./components/Intrest/intrest";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Projects from "./components/Projects/projects";
import Skills from "./components/skills/skills";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Intrest/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
