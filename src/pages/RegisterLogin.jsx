import React, { useEffect, useState } from "react"
import Header from "../Common/Header"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../FirebaseConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router"
export default function RegisterLogin() {
  let navigator=useNavigate()
  const [user, setuser] = useState(null)
  const auth = getAuth(app)
  let FormHandle = (event) => {
    let email = event.target.email.value
    let password = event.target.password.value
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user
        console.log(user)
        setuser(user)
        toast.success("Account Create")
        // ...
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code
        const errorMessage = error.message
        toast.error(errorMessage)
      })
  }
  useEffect(() => {
    if (user !== null) {
      setTimeout(() => {
        navigator("/Login")
      }, 2000)
    }
  }, [user])
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="space-y-6" onSubmit={FormHandle}>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 rounded-md border-[2px] border-[solid] border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border-[2px] border-[solid] px-4 py-3 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Register
            </button>
          </form>
        </div>
        <ToastContainer position="top-center" autoClose={500} />
      </div>
    </>
  )
}
