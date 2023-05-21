import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const MyCountdownComponent = () => {
  const [targetDate, setTargetDate] = useState(() => {
    const storedTargetDate = localStorage.getItem('countdownTargetDate');
    return storedTargetDate ? parseInt(storedTargetDate) : Date.now() + 15 * 24 * 60 * 60 * 1000;
  });

  useEffect(() => {
    localStorage.setItem('countdownTargetDate', targetDate.toString());
  }, [targetDate]);

  const handleCountdownComplete = () => {
    setTargetDate(null); // Set targetDate to null to stop the countdown
    localStorage.removeItem('countdownTargetDate'); // Clear the stored targetDate
  };

  const renderer = ({ days, hours, minutes, seconds }) => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      handleCountdownComplete();
    }

    return (
      <div className=" font-bold text-3xl text-white">
        <span className='text-error'>{days}</span> days <span className='text-error'>{hours}</span> hours <span className='text-error'>{minutes}</span> minutes <span className='text-error'>{seconds}</span> seconds
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default MyCountdownComponent;
