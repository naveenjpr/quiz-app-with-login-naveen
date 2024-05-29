import React, { useEffect, useState } from "react"
import Header from "../Common/Header"
import { getDatabase, ref, onValue } from "firebase/database"
import { app } from "../FirebaseConfig"
import { FaQuestion } from "react-icons/fa6"

export default function ViewQuiz() {
  const [finalQuiz, setfinalQuiz] = useState([])
  console.log(finalQuiz)
  const db = getDatabase(app)
  useEffect(() => {
    const starCountRef = ref(db, "quiz/")
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      let question = []
      for (let key in data) {
        let items = data[key]
        question.unshift(items)
      }
      setfinalQuiz(question)
      // updateStarCount(postElement, data)
    })
  }, [])

  return (
    <>
      <Header />
      <div className="w-[100%] ">
        <div className="max-w-[500px] mx-auto  my-[20px] px-[20px]">
          <div className="grid gri-cols-1  ">
            {finalQuiz.map((v, i) => {
              return (
                <>
                  <div className="border-[2px] border-[solid] border-[black] mb-3 p-[10px]">
                    <div className="flex justify-between mb-[20px]">
                      <h1 className="capitalize font-bold">
                        Play Programming quiz
                      </h1>
                      <span className="text-[green]">Time:00:10:00 hrs</span>
                    </div>
                    <div className="flex mb-[15px]">
                      
                      <h1 className="capitalize text-[blue] font-bold flex items-center ">
                        relative of question "{v.courseCategory}"
                        
                      </h1>
                    </div>
                    <div className="flex mb-[15px]">
                      <span className="text-[green]">Q.</span>
                      <h1 className="capitalize text-[blue] font-bold flex items-center ">
                        {v.question}{" "}
                        <span>
                          <FaQuestion />
                        </span>
                      </h1>
                    </div>
                    <div className="flex bg-[#ccc] text-black hover:bg-[red] cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
                      <span className="">Ans:</span>
                      <h1 className="capitalize  ">{v.option1}</h1>
                    </div>
                    <div className="flex bg-[#ccc] text-black hover:bg-[red] cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
                      <span className="">Ans:</span>
                      <h1 className="capitalize  ">{v.option2}</h1>
                    </div>
                    <div className="flex bg-[#ccc] text-black hover:bg-[red] cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
                      <span className="">Ans:</span>
                      <h1 className="capitalize  ">{v.option3}</h1>
                    </div>
                    <div className="flex bg-[#ccc] text-black hover:bg-[red] cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
                      <span className="">Ans:</span>
                      <h1 className="capitalize  ">{v.option4}</h1>
                    </div>
                    <div className="w-[100%] mb-[15px] ]">
                      <button className="capitalize bg-[green] text-white w-[100%] py-[5px] rounded-[4px]">
                        <span className="mr-[10px]">Current answer</span>{" "}
                        {v.Currentanswer}
                      </button>
                    </div>
                  </div>
                </>
              )
            })}

            <div className="mb-[10px]">
              <button className="capitalize bg-[green] text-white px-[30px] rounded-[3px] py-[3px]">
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
