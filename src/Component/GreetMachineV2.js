import React, { useRef, useState, useEffect } from 'react';

// A component to greet users
// A variant from another component 'GreetMachine', which implement the program
// using the react hook useRef 
const GreetMachineV2 = () => {
    // useRef returns a ref object that persists throughout the whole lifetime of the component
    // Initiate the current object and assign a null value to it
    const inputRef = useRef(null);

    // State variable of an array to store all users' name
    const [nameArray, setNameArray] = useState([]);

    // After adding a name to the name array, clear the string in the input field
    useEffect(() => {
        inputRef.current.value = '';
    }, [nameArray]);

    // When user click submit button, check if the current property of the ref object contains
    // a value, for empty value, alert the user for entering a name, otherwise
    // pass the value to the name array
    const handleSubmit = () => {
        if (inputRef.current.value) {
            setNameArray(prevState => [...prevState, inputRef.current.value]); // use spread operator to push new element in the array
        } else {
            alert('Please enter a name.')
        }
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

    // When user click Reset button, empty the array
    const handleReset = () => {
        setNameArray([]);
    };

    return (
        <>
            <h1>Greet Machine version 2</h1>
            <label style={{ display: 'block' }} htmlFor="username">What is your name?</label>
            <input
                id='username'
                type='text'
                ref={inputRef}
            />
            <div style={{ display: 'block' }}>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <br />
            <p>Hello {printNames(nameArray)} ! Nice to meet you!</p>
        </>
    );
};

export default GreetMachineV2;

