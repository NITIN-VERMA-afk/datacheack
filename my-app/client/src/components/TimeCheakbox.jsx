import { useState, useEffect } from 'react';

const TimeCheckbox = ({ data, selectedTimezone }) => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const generateTime = () => {
    const intervals = [];
    const timezoneOffset = selectedTimezone === 'option1' ? 11 * 60 : 0;

    for (let hour = 8; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const adjustedHour = (hour - Math.floor((minute + timezoneOffset) / 60) + 24) % 24;
        const adjustedMinute = (minute - timezoneOffset + 60) % 60;

        const time = `${adjustedHour % 12 === 0 ? 12 : adjustedHour % 12}:${adjustedMinute === 0 ? '00' : adjustedMinute} ${
          adjustedHour >= 12 ? 'PM' : 'AM'
        }`;

        intervals.push(time);
      }
    }
    return intervals;
  };

  const handleCheckboxChange = (time) => {
    const newSelectedTimes = selectedTimes.includes(time)
      ? selectedTimes.filter((selectedTime) => selectedTime !== time)
      : [...selectedTimes, time];
    setSelectedTimes(newSelectedTimes);
  };

  useEffect(() => {
    const initialSelectedTimes = data.map((item) => item.Time);
    setSelectedTimes(initialSelectedTimes);
  }, [data]);

  useEffect(() => {
    const matchingDates = data.map((item) => item.Time);
    setSelectedTimes((prevSelectedTimes) =>
      prevSelectedTimes.filter((time) => matchingDates.includes(time))
    );
  }, [data]);

  useEffect(() => {
    const initialSelectedTimes = data.map((item) => item.Time);
    setSelectedTimes(initialSelectedTimes);
  }, [data]);

  return (
    <div className='border-blue-500'>
      <div className='flex flex-wrap max-w-screen-md mx-auto gap-2'>
        {generateTime().map((time, index) => (
          <div key={`${time}-${index}`}>
            <label>
              <input
                type="checkbox"
                value={time}
                checked={selectedTimes.includes(time)}
                onChange={() => handleCheckboxChange(time)}
              />
              {time}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeCheckbox;








