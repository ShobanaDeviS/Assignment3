import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = props =>{

    const handleAddUser =(e)=>{
        e.preventDefault();
    }

    return(
        <Card className={classes.input}>
          <form onSubmit={handleAddUser}>
            <label htmlFor="username">UserName </label>
            <input type="text" id="username"/>
            <label htmlFor="age"> Age (Years)</label>
            <input type="number" id="age"/>
            <button type="submit">Submit</button>
          </form>
        </Card>
       
    );
};
export default AddUser;