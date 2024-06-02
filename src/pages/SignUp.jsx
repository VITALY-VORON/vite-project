import "../App.css"
import { useState } from "react";

const SignUp = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ppassword, setpPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handlepPassword = (e) => {
    setpPassword(e.target.value);
  }

  const handleData = () => {
    console.log({userName, password});
  }

  return(
    <div className="page">
      <div>
        <h1>Sign Up page</h1>
        <input type="text" placeholder="Username" className="loginInput" value={userName} onChange={(e) => handleUserName(e)} />
        <input type="password" placeholder="Password" className="loginInput" value={password} onChange={(e) => handlePassword(e)} />
        <input type="password" placeholder=" повторить Password" className="loginInput" value={ppassword} onChange={(e) => handlepPassword(e)} />
        <button className="loginBtn" onClick={handleData}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp;