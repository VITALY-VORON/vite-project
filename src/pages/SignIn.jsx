import "../App.css"
import { useState } from "react";

const SignIn = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleData = () => {
    console.log({userName, password});
  }

  return(
    <div className="page">
      <div>
        <h1>Sign In page</h1>
        <input type="text" placeholder="Username" className="loginInput" value={userName} onChange={(e) => handleUserName(e)} />
        <input type="password" placeholder="Password" className="loginInput" value={password} onChange={(e) => handlePassword(e)} />
        <button className="loginBtn" onClick={handleData}>Sign In</button>
      </div>
    </div>
  )
}

export default SignIn;

