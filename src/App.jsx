import Header from "./components/header";
import { Outlet } from "react-router-dom";

const App = () => {
  return ( 
    <div>
      <Header />
      <Outlet />
    </div>
   );
}
 
export default App;