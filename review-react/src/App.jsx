import { useState, useEffect } from 'react'
import './App.css'
import ColorSwitchBlock from './ColorSwitchBlock.jsx';
import Clock from './Clock.jsx';
import Form from './Form.jsx';
import Person from './Person.jsx';

function useTime() {
    // Defining a new Hook, Date() fetches current date and time
    // setInterval works in milliseconds, so 1000 = 1 second
    // Each second, the new Date() is retrieved, new time is set
    // clearInterval deletes data no longer in use (past seconds)
    // Continues to run, state updates every second
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}


function App() {
    // useState Hook: set initial value of variable, updated by calling its corresponding function
    // const [stateVariable, setStateVariable] = useState(initialValue);
    // to update, use setStateVariable(newValue);
    const [count, setCount] = useState(0)
    const [cardClicks, setCardClicks] = useState(0);

    //used for clock example
    const time = useTime();

    // Note: functions must be passed to event handler, NOT called
    // this way the action executes AFTER an interaction, not immediately
    function handleButtonClick(e) {
        alert('button clicked!');
    }

    // make sure events don't clash: e.stopPropagation(); example with cardClick & ColorSwitchBlock
    // other buttons still increment cardClick value
    function handleCardClick() {
        setCardClicks(c => c + 1);
    }

    // part of example above, function for generating a random color
    function getRandomLightColor() {
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Sets background color to be the randomly generated color on click
    // maybe "animate" on hover? set interval for a second, change bg color
    function handleChangeColor() {
        let bodyStyle = document.body.style;
        bodyStyle.backgroundColor = getRandomLightColor();
    }

    return (
        <>
        <div style={{width:'100%', height:'100%'}} onClick={handleCardClick}>
            <h1>React Review!</h1>
            <button onClick={e => {e.stopPropagation(); setCount((count) => count + 1);}}>
                count is {count}
            </button>
            <button onClick={e => {e.stopPropagation(); {handleButtonClick(e)};}}>
                click me!
            </button>
            <ColorSwitchBlock onChangeColor={handleChangeColor} />

            <div className="card">
                <h2>Clicks on this box: {cardClicks}</h2>
                <p>
                    Edit <code>src/App.jsx</code>
                </p>
                <Clock time={time.toLocaleTimeString()} />
                <Form />
            </div>
            <br/><br/>
            <div classname="card">
                <Person />
            </div>
        </div>
    </>

  )
}

export default App
