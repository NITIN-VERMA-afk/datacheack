

import React, { useState, useEffect } from "react";
import { IoCaretForward } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";

const Header = ({ onDateChange }) => {
  const [currentDate, setNewDate] = useState(new Date());
  const [manualChange, setManualChange] = useState(false);

  useEffect(() => {
    let interval;

    if (!manualChange) {
      interval = setInterval(() => {
        setNewDate(new Date());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [manualChange]);

  const handlePreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(currentDate.getDate() - 7);
    setNewDate(previousWeek);
    onDateChange(previousWeek);
    setManualChange(true);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setNewDate(nextWeek);
    onDateChange(nextWeek);
    setManualChange(true);
  };

  return (
    <>
      <nav className="flex justify-between align-middle bg-smoke-400">
        <div className="flex gap-10">
          <button className="flex items-center" onClick={handlePreviousWeek}>
            <IoCaretBack /> previous week
          </button>
          <h1>{currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</h1>
        </div>
        <div>
          <button className="flex items-center" onClick={handleNextWeek}>
            next week{<IoCaretForward />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;




