import { ReactTyped } from "react-typed";

export default function RunningText() {
  return (
    <div className="text-center mt-10">
      <span className="text-white text-3xl md:text-5xl font-extrabold font-mono ">
        I'm a {" "}

       <span className="bg-gradient-to-r from-orange-700 to-red-500 bg-clip-text text-transparent">
         <ReactTyped
          strings={ ["Web Developer.", "Python Developer.", "Data Analyst.", "Full Stack Developer.", "MERN Stack Developer." ]}
          typeSpeed={80} // typing speed
          backSpeed={70} // backspace speed
          loop // infinite loop
        />
       </span>
      </span>
    </div>
  );
}
