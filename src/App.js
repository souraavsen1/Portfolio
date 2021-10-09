import "./index.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import WorkingStacks from "./Components/Working-Stacks/WorkingStacks";
import About from "./Components/About";
import Projects from "./Components/Project-Section/Projects";
import Contacts from "./Components/Contacts";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loader, setloader] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setloader(false);
      }, 3000);
  }, []);

  return (
    <div className='bg-gradient-to-br from-gray-600 ... head font_poppins'>
      {loader ? (
        <Loader/>
      ) : (
        <div>
          <Navbar />
          <Header />
          <About />
          <WorkingStacks />
          <Projects />
          <Contacts />
        </div>
      )}
    </div>
  );
}

export default App;
