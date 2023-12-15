import  { useState } from 'react';

const Checkbox = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);

 
  const generateTime = () => {
    const intervals = [];
    for (let hour = 8; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour % 12 === 0 ? 12 : hour % 12}:${minute === 0 ? '00' : minute} ${
          hour >= 12 ? 'PM' : 'AM'
        }`;
        intervals.push(time);
      }
    }
    return intervals;
  };


  const Checkbox = (time) => {
    const newSelectedTimes = selectedTimes.includes(time)
      ? selectedTimes.filter((selectedTime) => selectedTime !== time)
      : [...selectedTimes, time];
    setSelectedTimes(newSelectedTimes);
  };

  return (
    <div className=' border-blue-500'>
    <div className='flex flex-wrap  max-w-screen-md mx-auto gap-2'>
    {generateTime().map((time) => (
        <div  key={time}>
          <label >
            <input 
              type="checkbox"
              value={time}
              checked={selectedTimes.includes(time)}
              onChange={() => Checkbox(time)}
            />
            {time}
          </label>
        </div>
      ))}

    </div>
     
     
    </div>
  );
};

export default Checkbox;

