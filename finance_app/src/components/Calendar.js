import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CustomCalendar = ({ onDateSelect}) => {
    const[selectDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    return(
        <div className="calendar">
            <h2>Transaction Calendar</h2>
            <Calendar onChange={handleDateSelect} value={selectedDate}/>
        </div>
    );

};

export default CustomCalendar;