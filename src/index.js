import React from "react"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import ReactDOM from "react-dom/client"

import Home from "./pages/Home"
import AddQuiz from "./pages/Add-Quiz"
import Dashobard from "./pages/Dashobard"
import Logout from "./pages/Log-out"

import Register from "./pages/Login"
import ViewQuiz from "./pages/View-Quiz"
import RegisterLogin from "./pages/RegisterLogin"
import Login from "./pages/Login"
import MainContext from "./Context/MainContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AddQuiz",
    element: <AddQuiz />,
  },
  {
    path: "/Dashobard",
    element: <Dashobard />,
  },
  {
    path: "/Logout",
    element: <Logout />,
  },
  {
    path: "/RegisterLogin",
    element: <RegisterLogin />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/ViewQuiz",
    element: <ViewQuiz />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
