import React, { useState } from 'react';

import Card from '../UI/Card';
//Here we want the user to be able to add name and age and enter it
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import UsersList from './UsersList';

const AddUser = props => {
    //useState constants
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
    const addUserHandler = (event) =>
    {      
        //prevent the default of sending a request 
        event.preventDefault();

        //error handling
        //If empty string or Age is 0, end fxn
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        //The +before enteredAge forces it to be an int
        if(+enteredAge < 1)
        {
            return;
        }
        
        props.onAddUser(enteredUsername, enteredAge);

        //set fields to default blank
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);   
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);       
    };

    return(  
        //since Card is our own custom component, it doesn't know how to use className property so we have to write that
        //within our class component we called it className. If we picked something like ccsClassname then we would need to reference that in the card element 
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id="username" type="text" value = {enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age</label>
            <input id="age" type="number" value = {enteredAge} onChange={ageChangeHandler}/>
            {/* Our own custom button */}
            <Button type="submit">Submit</Button>
        </form>
    </Card>
    );
};

export default AddUser; 