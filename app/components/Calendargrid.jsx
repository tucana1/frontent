import React from 'react';
import CalendarBox from './CalendarBox';
import './CalendarGrid.css';

const Calendargrid = ({ calendarData, month, year }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Intl.DateTimeFormat('default', { month: 'long' }).format(new Date(year, month));

  return (
    <div className="calendar-grid">
      {Array.from({ length: daysInMonth }, (_, index) => {
        const day = index + 1;
        const currentDate = new Date(year, month, day);
        
        const dayData = calendarData.find(doc => {
          const docDate = new Date(doc.Date.seconds * 1000);
          return docDate.getDate() === day &&
                 docDate.getMonth() === month &&
                 docDate.getFullYear() === year;
        });

        const tasks = dayData ? dayData.tasks : [];

        return (
          <CalendarBox key={day} day={day} month={monthName} year={year} tasks={tasks} />
        );
      })}
    </div>
  );
};

export default Calendargrid;
