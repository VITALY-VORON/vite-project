import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <button>
        <Link to={"sign-in"}>SignIn</Link>
      </button>
      <button>
        <Link to={"sign-up"}>SignUp</Link>
      </button>
    </div>
  );
};

export default Header;


// export const func = () => {
//     return()
// }

// export default func