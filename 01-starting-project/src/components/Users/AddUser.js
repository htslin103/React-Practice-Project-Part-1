import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
//Here we want the user to be able to add name and age and enter it
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //useState constants
    const [error, setError] = useState();
    
    const addUserHandler = (event) =>
    {      
        //prevent the default of sending a request 
        event.preventDefault();
        const enteredName = (nameInputRef.current.value);
        const enteredUserAge = (ageInputRef.current.value);

        //error handling
        //If empty string or Age is 0, end fxn
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values) .'
            });
            return;
        }
        //The +before enteredAge forces it to be an int
        if(+enteredUserAge < 1)
        {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }
        
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    }

    return(
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        {/* //since Card is our own custom component, it doesn't know how to use className property so we have to write that
        //within our class component we called it className. If we picked something like ccsClassname then we would need to reference that in the card element */}
     <Card className={classes.input}> 
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input 
            id="username" 
            type="text" 
            ref={nameInputRef}
            />
            <label htmlFor='age'>Age</label>
            <input id="age" type="number" 
            ref={ageInputRef}/>
            {/* Our own custom button */}
            <Button type="submit">Submit</Button>
        </form>
     </Card>
    </Wrapper>
    );
};

export default AddUser; 