import React from 'react';
import TaskList from './TaskList';

const CalendarBox = ({ day, month, year, tasks }) => {
  return (
    <div className="calendar-box">
      <h4>{`${month} ${day}, ${year}`}</h4>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};

export default CalendarBox;
