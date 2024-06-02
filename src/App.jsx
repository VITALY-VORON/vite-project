import { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {

  const [login, setLogin] = useState(true);

  return ( 
    <div>
      <button onClick={() => setLogin(!login)}>
        {login ? "SignUp" : "SignIn"}
      </button>
      {login === true ? <SignUp /> : <SignIn />}
    </div>
   );
}
 
export default App;