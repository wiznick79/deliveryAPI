import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const SlotPicker = (props) => {
    const slots = props.slots;
    const today = new Date();
    const [startDate, setStartDate ] = useState(setHours(setMinutes(today, today.getMinutes()), today.getHours()));
    
    const includedDates = [];
    slots.forEach((slot) => {
        let slotDate = new Date(slot.date);
        includedDates.push(slotDate);
        console.log(slotDate);

    })    
    console.log(includedDates);
     return (
        <div>
            <div className="formlabel">Date</div>
            <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)}
                includeDates={includedDates}
                dateFormat="dd/MM/yyyy"        
            />
            <div className="formlabel">Time</div>
            <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeCaption="Time"
                includeTimes={includedDates}
                dateFormat="HH:mm"        
            />
        </div>
    );
  };

export default SlotPicker;