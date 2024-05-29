import React, { createContext, useEffect, useState } from "react"

export let logincontext = createContext()
export default function MainContext({ children }) {
  const [user, setuser] = useState(localStorage.getItem("token") ?? "")
  useEffect(() => {
    localStorage.setItem("token", user)
  }, [user])

  return (
    <logincontext.Provider value={{ user, setuser }}>
      {children}
    </logincontext.Provider>
  )
}
