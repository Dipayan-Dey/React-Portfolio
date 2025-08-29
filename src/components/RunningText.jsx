import React, { useState, useEffect } from 'react';

// Simple Typing Text Component
// const TypingText = ({ text, speed = 100 }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText(text.slice(0, index + 1));
//         setIndex(index + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     }
//   }, [index, text, speed]);

//   return (
//     <span>
//       {displayText}
//       <span className="animate-pulse">|</span>
//     </span>
//   );
// };

// Multiple Text Typing (cycles through different texts)
const MultipleTyping = ({ texts, speed = 200 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, textIndex, isDeleting, texts, speed]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function RunningText() {
  const roles = ["Web Developer", "Python Developer", "Data Analyst", "Full Stack Developer", "MERN Stack Developer" ];

  return (
    <div className="  p-4">
      {/* <div className="max-w-2xl mx-auto space-y-8"> */}
        
        {/* Simple typing example */}
        {/* <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Simple Typing:</h2>
          <p className="text-lg">
            <TypingText text="Hello, I'm a web developer!" speed={80} />
          </p>
        </div> */}

        {/* Multiple roles typing */}
        {/* <div className=" p-6 rounded-lg shadow"> */}
          {/* <h2 className="text-xl font-bold mb-4">Role Cycling:</h2> */}
          <p className="text-4xl font-extrabold font-mono ">
            I'm a <span className='bg-gradient-to-r from-orange-700 to-red-500 bg-clip-text text-transparent'><MultipleTyping texts={roles} speed={200} /></span>
          </p>
        {/* </div> */}

        {/* Different speeds */}
        {/* <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Different Speeds:</h2>
          <div className="space-y-4">
            <p>Fast: <TypingText text="Quick typing!" speed={50} /></p>
            <p>Normal: <TypingText text="Normal speed typing!" speed={100} /></p>
            <p>Slow: <TypingText text="Slow typing..." speed={200} /></p>
          </div>
        </div> */}

        {/* Skills example */}
        {/* <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Skills:</h2>
          <p className="text-lg">
            I work with <MultipleTyping texts={["React", "Python", "JavaScript", "Node.js", "MongoDB"]} speed={80} />
          </p>
        </div> */}

      {/* </div> */}
    </div>
  );
}