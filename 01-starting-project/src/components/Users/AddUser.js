import React from 'react';
import Card from '../UI/Card';
//Here we want the user to be able to add name and age and enter it
import classes from './AddUser.module.css';
const AddUser = props => {

    const addUserHandler = (event) =>
    {
        //prevent the default of sending a request 
        event.preventDefault();
    }
    return(  
        //since Card is our own custom component, it doesn't know how to use className property so we have to write that
        //within our class component we called it className. If we picked something like ccsClassname then we would need to reference that in the card element 
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id="username" type="text"/>
            <label htmlFor='age'>Age</label>
            <input id="age" type="number"/>
            <button type="submit">Submit</button>
        </form>
    </Card>
    );
};

export default AddUser; 