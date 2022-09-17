import React, { useState } from 'react';

// A program to take user's name and greet the user,
// it can greet multiple users
const GreetMachine = () => {
    // State variable getting and setting the user's name
    const [name, setName] = useState('');
    // State variable of an array to store all users' name
    const [nameArray, setNameArray] = useState([]);

    // When user click submit button, pass his name to the name array,
    // if name is an empty string, alert user to enter a name
    const submitName = (event) => {
        event.preventDefault(); // necessary to prevent the browser's default behavior in submitting 
        if (name.length > 0) {
            setNameArray(prevState => [...prevState, name]);
            setName('');
        } else {
            alert('Please enter a name.');
        }
    };

    // Take the string input (user's name) and pass its value to the state variable name
    const updateName = (event) => {
        setName(event.target.value);
    };

    // Concatenate names with a comma between two names
    const printNames = (array) => {
        let str = '';
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                str += array[i];
            } else {
                str += ', ' + array[i];
            }
        }
        return str;
    };

    // When user click Reset button, clear name and empty name array
    const resetGreeter = () => {
        setName('');
        setNameArray([]);
    };

    return (
        <>
            <h1>Greet Machine</h1>
            <form>
                <label style={{ display: "block" }} htmlFor="username">What is your name?</label>
                <input id="username" type="text" autoComplete="off" value={name} onInput={updateName} />
                <br />
                <button onClick={submitName}>Submit</button>
                <button onClick={resetGreeter}>Reset</button>
                <p>Hello {printNames(nameArray)} ! Nice to meet you!</p>
            </form>
        </>
    );
};

export default GreetMachine;