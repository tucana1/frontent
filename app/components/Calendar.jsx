'use client';

import React, { useEffect, useState } from 'react';
import Calendargrid from './Calendargrid';

const Calendar = () => {
  const [calendarData, setCalendarData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const fetchCalendarData = async () => {
        const response = await fetch('http://localhost:8080/calendar');
        const data = await response.json();
        setCalendarData(data);
    };

    fetchCalendarData();
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div>
      <h1>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
      <button onClick={handlePrevMonth}>Previous Month</button>
      <button onClick={handleNextMonth}>Next Month</button>
      <Calendargrid calendarData={calendarData} month={currentDate.getMonth()} year={currentDate.getFullYear()} />
    </div>
  );
};

export default Calendar;
