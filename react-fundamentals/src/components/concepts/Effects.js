//Effects

// useEffect(()=> {
//     console.group('hello!');
// }, [sampleStateVariable])

// //every 1 time the sampleStateVariable changes, we console log hello

import React, {useState, useEffect} from 'react';

const Effects = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2> Below are some important points regarding effects: </h2>
                    <ul>
                        <li>They are triggered with state and prop updates, as well as after initial render to the DOM.</li>
                        <li>Effects are used to trigger certain actions based upon changes to the component.</li>
                        <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside APIs, and other functions which may use system resources.</li>
                    </ul>
                    <SampleEffect />
                    <br />
                    <SampleEffect />
            </div>
        </div>
    )
};

export default Effects;

const SampleEffect = () => {
    const [timerRunning, setTimerRunning]= useState(false);        //in console log, unclicked button the state will be set to false. 
   
    useEffect(() => {
        let timer;
        if(timerRunning) {                      //setting a new timer if our timerRunning variable is true, so we can reclick the button 
            timer = window.setTimeout(()=> {
                console.log(Date.now())
                console.log('the timer expired', Date.now()/1000);  //divides now by 1 second?why?
                setTimerRunning(false)
            }, 2000)    //callback function sends message to console, resets timeRunning to false 2 seconds after expire. 
        }
    return () => {window.clearTimeout(timer); console.log('the timer was cleaned up', Date.now()/1000)}
})      //to prevent memory leaks aka trying to go to another view when timer still running

        useEffect(() => {
         console.log('another state change'); }, [timerRunning]);

    let buttonHandler = () => {
        if(!timerRunning){
            setTimerRunning(true);                 //we are only changing the state once, so they button will only change once as well (can't reclick it)
        }
    }
    return(
        <div style={{border: '1px dashed black'}}>
            <h2>This component demos an effect</h2>
            <button onClick= {buttonHandler}>Click me to start an effect in the console</button>
        </div>
    )
}

//selectively running callback function that sets timer (when 2 second elasped). using useEffect to initiate its own state change when callback is run