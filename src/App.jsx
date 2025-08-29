import React, { useEffect } from 'react'
import Hero from './components/Hero'
// import Hero1 from './components/Hero1'
import Header from './components/Header'
import RunningText from './components/RunningText'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
   useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => e.preventDefault();

    // Disable copy
    const handleCopy = (e) => e.preventDefault();

    // Disable key shortcuts
    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+Shift+C
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ["U", "S","A"].includes(e.key.toUpperCase()))
      ) {
        e.preventDefault();
      }
    };

    // Disable double click selection
    const handleDoubleClick = (e) => e.preventDefault();
   const handleSelectStart = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dblclick", handleDoubleClick);
 document.addEventListener("selectstart", handleSelectStart);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dblclick", handleDoubleClick);
       document.addEventListener("selectstart", handleSelectStart);
    };
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <RunningText/> */}
      {/* <Footer/> */}
      {/* <Project/> */}
    </div>
  )
}

export default App