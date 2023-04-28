import React, {useState} from "react";
import './index.css';
import ShowAndHidePassword from "./ShowAndHidePassword";

function BasicForm(){
  const [name, setName] = useState('')   
  const [password, setPassword] = useState('')        
  
  const handleNameChange = event => {
    setName(event.target.value)
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  };

  
  const handleSubmit = event => {
    event.preventDefault();
    alert(`Your state values: \n 
            useName: ${name} \n 
            password: ${password} \n
        `);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="login-box">
            <div className="user-box">
                <label>user Name</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your name"
                    onChange={handleNameChange}
                    value={name}
                    />
            </div>
        <div className="user-box">
            <label>Password</label>
            <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handlePasswordChange}
                    value={password}
                    />
                <>
                  <ShowAndHidePassword />
                  <br/>
                </>
            </div>
        <button type="submit">
            Login
            </button>
        </div>
    </form>
  )
}

export default BasicForm