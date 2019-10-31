import React, {useState, useEffect} from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

// const getNewTimeString = () => {
//     const timeZoneDate = Date.getTimezoneOffset();
//     return timeZoneDate;
// }


const ClockApp = () => {
    const [time, setTime]= useState(getTimeString());   //setting up our state to be the current time
    // const [newTimeZone, setNewtimeZone] = useState(getNewTimeString());

   
    useEffect(()=> {
        const interval = setInterval(() => {
            let date = getTimeString();
            // let zone = getNewTimeString();
            setTime(date);
        }, 1000);

        return () => clearInterval(interval)
    }, [])
    return(
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>Indianapolis</p>
            <p>{time}</p>                     
        </div>
    )
}

export default ClockApp;

//time referring to variable on line 9
