import { useState, useEffect } from "react";
import { IoCaretForward } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";

const Header = () => {
  const [currentDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="flex  justify-between align-middle bg-smoke-400 ">
        <div className="flex gap-10">
          <button className="flex items-center"><IoCaretBack /> previous week</button>
          <h1>{currentDate.toLocaleDateString()}</h1>
        </div>
        <div>
          <button className="flex items-center">next week{<IoCaretForward />}  </button>
        </div>
      </nav>
     
    </>
  );
};

export default Header;

