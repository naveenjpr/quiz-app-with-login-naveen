import React, { useContext, useState } from "react"
import { IoReorderThreeOutline } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"
import { Link, useLocation } from "react-router-dom"
import logo from "../Images/quizlogo.jpg"
import { logincontext } from "../Context/MainContext"

export default function Header() {
  let { user, setuser } = useContext(logincontext)
  let location = useLocation()
  let path = location.pathname
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen)
  // }

  // let Mylink = [
  //   { navbarlink: "blog", to: "/" },
  //   { navbarlink: "Creating", to: "/Create" },
  //   { navbarlink: "Listing", to: "/Listing" },
  //   {
  //     navbarlink: (
  //       <button className="bg-white text-black px-[8px] py-[4px] rounded-[5px]">
  //         Login
  //       </button>
  //     ),
  //     to: "/Login",
  //   },
  // ]
  return (
    <>
      <header className="w-[100%] font-sans bg-[#ccc]">
        <div className="w-[90%] mx-auto ">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center">
            <div className="">
              <ul className="flex justify-start items-center text-center">
                <li className="pr-[15px]">
                  <img src={logo} alt="" className="w-[50px] h-[50px]" />
                </li>
                {/* <li
                  className={`pr-[15px] hover:text-[green] ${
                    path == "/" ? "bg-[blue] text-[white]" : ""
                  }`}
                >
                  <Link to={"/"}>Home</Link>{" "}
                </li> */}
                <li
                  className={`pr-[15px] hover:text-[green] ${
                    path == "/AddQuiz" ? "bg-[blue] text-[white]" : ""
                  }`}
                >
                  <Link to={"/AddQuiz"}> Add-quiz</Link>
                </li>
                <li
                  className={`pr-[15px] hover:text-[green] ${
                    path == "/ViewQuiz" ? "bg-[blue] text-[white]" : ""
                  }`}
                >
                  <Link to={"/ViewQuiz"}>View-Quiz</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex justify-end items-center text-center">
                {user === "" ? (
                  <>
                    <li
                      className={`pr-[15px] hover:text-[green] ${
                        path == "/RegisterLogin" ? "bg-[blue] text-[white]" : ""
                      }`}
                    >
                      <Link to={"/RegisterLogin"}>Register</Link>{" "}
                    </li>
                    <li
                      className={`pr-[15px] hover:text-[green] ${
                        path == "/Login" ? "bg-[blue] text-[white]" : ""
                      }`}
                    >
                      <Link to={"/Login"}>Login</Link>{" "}
                    </li>
                  </>
                ) : (
                  <>
                    <li className="mr-[10px]">
                      <Link to={"/RegisterLogin"}>Change-Password</Link>
                    </li>
                    <li className="mr-[10px]">
                      <Link onClick={() => setuser("")}>Log-out</Link>
                    </li>
                  </>
                )}

                <li
                  className={`pr-[15px] hover:text-[green] ${
                    path == "/Dashobard" ? "bg-[blue] text-[white]" : ""
                  }`}
                >
                  <Link to={"/Dashobard"}>Dashboard</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
