import React, { useState} from 'react';
import './UserForm.css'

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
        <form onSubmit={submitHandler}>
            <div className='new-user__controls'>
                <div className="new-user__control">
                    <label>Username</label>
                    <input type ="text" value = {enteredUsername} onChange = {usernameChangeHandler}/>
                </div>
                <div className="new-user__control">
                    <label>Age</label>
                    <input type ="text" value = {enteredAge} onChange = {ageChangeHandler}/>
                </div>      
            </div>
            <div className='new-user__actions'>
                <button type="submit">Add User</button>
            </div>
        </form>
    );
};

export default UserForm;