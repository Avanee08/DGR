import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput';
const App=()=>{
  const [values,setValues]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:"",
  });
  const inputs=[{
    id:1,
    name:"firstname",
    type:"text",
    placeholder:"First Name",
    errorMessage:"Shouldn't include any special character!",
    label:"First Name",
    required:true,
    pattern:"^[A-Za-z0-9]{2,10}$",
  },
  {
    id:2,
    name:"lastname",
    type:"text",
    placeholder:"Last Name",
    errorMessage:"Shouldn't include any special character!",
    label:"Last Name",
    pattern:"^[A-Za-z0-9]{2,10}$",
  },
  {
    id:3,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be a valid email address!",
    label:"Email",
    required:true,
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Should contain 9-15 characters including special character,letter and digit!",
    label:"Password",
    required:true,
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,15}$`,
  },
  {
    id:5,
    name:"confirmpassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Passwords don't match!", 
    label:"Confirm Password",
    required:true,
    pattern:values.password,
  },
];
const handlesubmit=(e)=>{
  e.preventDefault();
}
const onChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value});
}
console.log(values);
return (
  <div className='app'>
    <form onSubmit={handlesubmit}>
      <h1>Form</h1>
      {inputs.map((input)=>(
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
      <button type="submit" >Submit</button>
    </form>
  </div>
)}

export default App;
