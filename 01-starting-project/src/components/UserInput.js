import React, { useState} from 'react';
import UserForm from './UserForm'
//This form we will use to add in the new Users
const UserInput = (props) => {

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData, 
            id: Math.random().toString()
        };
        props.onAddUser(userData);
    };

    return(
        <div className='new-user'>
            <button> Add User</button>
            <UserForm onSaveUserData = {saveUserDataHandler} />
        </div>
    );
};
export default UserInput; 