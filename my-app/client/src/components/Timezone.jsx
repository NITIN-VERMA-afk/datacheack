import { useState } from "react";

const Timezone = () => {
  const [selectTimeZone, setSelectedTimezone] = useState("");
  const handleSelectChange = (event) => {
    setSelectedTimezone(event.target.value);
    console.log('Selected Timezone:', event.target.value);
  };
  return (
    <>
      <h1>Timezone</h1>
      <select
        className="w-screen bottom-1"
        id="mySelect"
        value={selectTimeZone}
        onChange={handleSelectChange}
      >
        <option value="">[UTC-0]</option>

        <option value="option1">[UTC +11:00]</option>
      </select>
    </>
  );
};

export default Timezone;
