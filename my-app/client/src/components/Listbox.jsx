import { useState } from "react";
import TimeCheckbox from "./TimeCheakbox";
import myData from "../Data/testDates"
const Listbox = (props) => {
  const [selectedTimezone, setSelectedTimezone] = useState("");
  // console.log(myData)
  return (
    <>
      <div className="flex gap-8   border-2">
        <div className="border-1  bg-slate-400">
          <h1 className="bold text-red-500">{props.weekday}</h1>
          <p>{props.date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        </div>
     
        <div>
        <TimeCheckbox data={myData} selectedTimezone={selectedTimezone} currentDate={props.date} />
        </div>
      </div>
    </>
  );
};

export default Listbox;
