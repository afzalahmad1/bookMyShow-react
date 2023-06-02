import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './signup.css'


const Signup = () => {
const navigate = useNavigate()
const [fullName,setFullName] = useState("");
const [email,setEmail] = useState("");
const [Password,setPassword] = useState("");
const [cnfPassword,setCnfPassword] = useState("");
const [message,setMessage] = useState("");
//const [users,setUsers] = useState([]);


  function loginPage(){
    navigate("/login")
  }

  function saveToLocalStorage(e){

    e.preventDefault();

    if(fullName.trim().length===0 || email.trim().length===0 || Password.trim().length===0 || cnfPassword.trim().length===0){
      setMessage("All the fields are mendatory")
      return;
    }else if(Password !==cnfPassword){
      setMessage("Password must be same")
      return;
    }

      setMessage("Successfully signed up")
      let user={
        "fullName" : fullName,
        "email" : email,
        "password" : Password
      }
      
      localStorage.setItem("userList",JSON.stringify(user));
  }




  return (
    <div className="container-form">
      <form onSubmit={saveToLocalStorage} id="signup-form">
        <h1>Signup</h1>
        <input placeholder="Full Name"  
        id="fullName"
        onChange={(event)=> setFullName(event.target.value)}/>


        <input placeholder="Email" 
        id="email"
        onChange={(event)=> setEmail(event.target.value)}/>


        <input placeholder="Password" 
        id="password"
        onChange={(event)=>setPassword(event.target.value)}/>


        <input placeholder="Confirm Password" 
        type="password"
        id="cnfPassword"
        onChange={(event)=>setCnfPassword(event.target.value)}/>


        {message && <p style={{color: message === "Successfully signed up"?"green":"red"}}>{message}</p>}
        <button type="submit">Signup</button>
        <button type="button" onClick={loginPage}>Goto Login Page</button>
      </form>
    </div>
  );
};

export default Signup;