import {React, useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = props =>{
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

    const handleAddUser =(e)=>{
        e.preventDefault();

        if(userName.trim().length === 0 || age.trim().length ===0){
          setError({
            title:"Invalid Input",
            message:"Please Enter Valid Name and Age"
          });
          return;
        }
        if(+age < 1)
        {
          setError({
            title:"Invalid Age",
            message:"Please Enter Greater than Zero"
          });
          return;
        }

        console.log(userName,age);
        props.onAddUser(userName, age);
        setUserName('');
        setAge('');
    }

    const handleUserName = (e)=>{
      setUserName(e.target.value);
    }
    const handleAge = (e)=>{
      setAge(e.target.value);
    }

    const handleError =()=>{
      setError(null);
    }
    return(
      <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={handleError}/>}
        <Card className={classes.input}>
          <form onSubmit={handleAddUser}>
            <label htmlFor="username">UserName </label>
            <input type="text" id="username" value={userName}  onChange={handleUserName}/>
            <label htmlFor="age"> Age (Years)</label>
            <input type="number" id="age" value={age} onChange={handleAge}/>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );
};
export default AddUser;