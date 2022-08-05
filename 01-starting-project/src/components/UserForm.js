import React, { useState} from 'react';

const UserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            username: enteredUsername,
            age: enteredAge
        };

        props.onSaveUserData(userData);
        setEnteredUsername('');
        setEnteredAge('');
    };

    return (
        <form>

        </form>
    );
};

export default UserForm;