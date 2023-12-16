import { useState } from "react";
import Header from "./components/Header";
import Timezone from "./components/Timezone";
import Listbox from "./components/Listbox";
import "./App.css";


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
 
  const getDefaultDate = (day, offset) => {
    const defaultDate = new Date();
    defaultDate.setDate(selectedDate.getDate() + offset);
    return defaultDate;
  };

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
 

  return (
    <>
      <Header onDateChange={handleDateChange} />
      <Timezone />

      {weekdays.map((day,index) => (
        <Listbox key={day} weekday={day} date={getDefaultDate(day, index - 1)} onDateChange={handleDateChange} />
      ))}
    </>
  );
}

export default App;
