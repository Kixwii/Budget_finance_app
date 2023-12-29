import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CustomCalendar = ({ onDateSelect}) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const datesInMonth = Array.from({length: lastDayOfMonth }, (_, index) =>
      new Date(currentYear, currentMonth, index + 1)
    );

    return(
      <div className="calendar-container">
        <h2> Transaction Calendar</h2>
        <div className="calendar-scroll">
            <div className="custom-calendar">
                {datesInMonth.map((date, index) => (
                    <div
                      key={index}
                      className="date-cell"
                      onClick={() => handleDateSelect(date)}  
                    >
                        <div className="day">{date.toLocaleDateString('en-US',{weekday: 'short'})}</div>
                        <div className="date">{date.getDate()} </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );

};

export default CustomCalendar;