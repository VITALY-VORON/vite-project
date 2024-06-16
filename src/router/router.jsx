import { createBrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import App from "../App"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUp /> },
    ]
  },
  {
    path: "/hibaba",
    element: <div>
        <h1>Hibaba</h1>
    </div>
  }
])