import React, { useEffect, useState } from "react"
import Header from "../Common/Header"
import { getDatabase, ref, onValue } from "firebase/database"
import { app } from "../FirebaseConfig"
import { FaQuestion } from "react-icons/fa6"

export default function ViewQuiz() {
  const [finalQuiz, setfinalQuiz] = useState([])

  // console.log(finalQuiz)

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
          <div className="grid gri-cols-1 ">
            {finalQuiz.length >= 1
              ? finalQuiz.map((v, i) => {
                  return (
                    <>
                      <QuestionItems question={v} index={i} />
                    </>
                  )
                })
              : "no question"}
          </div>
          <div className="mb-[10px]">
            <button className="capitalize bg-[green] text-black px-[30px] rounded-[3px] py-[3px]">
              next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function QuestionItems({ question, index }) {
  const [curans, setcurans] = useState("")
  console.log(question)

  let correctionAns = question.Currentanswer

  let finalcorAns = ""
  if (correctionAns == "A" || correctionAns == "a") {
    finalcorAns = question.option1
  }
  if (correctionAns == "B" || correctionAns == "b") {
    finalcorAns = question.option2
  }
  if (correctionAns == "C" || correctionAns == "c") {
    finalcorAns = question.option3
  }
  if (correctionAns == "D" || correctionAns == "d") {
    finalcorAns = question.option4
  }

  return (
    <>
      <div className="border-[2px] border-[solid] border-[black] mb-[3px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="capitalize font-bold">Play Programming quiz</h1>
          <span className="text-[green]">Time:00:10:00 hrs</span>
        </div>

        <div className="flex mb-[15px]">
          <h1 className="capitalize text-[blue] font-bold flex items-center ">
            relative of question "{question.courseCategory}"
          </h1>
        </div>
        <div className="flex mb-[15px]">
          <span className="text-[black] font-bold">
            {index + 1}
            <span className="text-[red] px-[2px]">Q.</span>
          </span>
          <h1 className="capitalize text-[blue] font-bold flex items-center ">
            {question.question}{" "}
            <span>
              <FaQuestion />
            </span>
          </h1>
        </div>
        <div className="flex bg-[#ccc] text-black  cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
          <h1
            className={`cursor-pointer text-[20px] w-[100%]  text-black p-2 mb-3 ${
              question.option1 == curans
                ? "bg-[green]"
                : curans == 1
                ? "bg-[red]"
                : ""
            }`}
            onClick={(event) => {
              let userans = event.target.innerHTML.trim()
              console.log(userans)
              if (userans == finalcorAns) {
                setcurans(userans)
              } else {
                setcurans(1)
              }
            }}
          >
            {question.option1}
          </h1>
        </div>
        <div className="flex bg-[#ccc] text-black  cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
          <h1
            className={`cursor-pointer text-[20px] w-[100%]  text-black p-2 mb-3 ${
              question.option2 == curans
                ? "bg-[green]"
                : curans == 2
                ? "bg-[red]"
                : ""
            }`}
            onClick={(event) => {
              let userans = event.target.innerHTML.trim()
              console.log(userans)

              if (userans == finalcorAns) {
                setcurans(userans)
              } else {
                setcurans(2)
              }
            }}
          >
            {question.option2}
          </h1>
        </div>
        <div className="flex bg-[#ccc] text-black  cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
          <h1
            className={`cursor-pointer text-[20px] w-[100%]  text-black p-2 mb-3 ${
              question.option3 == curans
                ? "bg-[green]"
                : curans == 3
                ? "bg-[red]"
                : ""
            }`}
            onClick={(event) => {
              let userans = event.target.innerHTML.trim()
              console.log(userans)

              if (userans == finalcorAns) {
                setcurans(userans)
              } else {
                setcurans(3)
              }
            }}
          >
            {question.option3}
          </h1>
        </div>
        <div className="flex bg-[#ccc] cursor-pointer p-[5px] rounded-[3px] mb-[10px]">
          <h1
            className={`cursor-pointer text-[20px] w-[100%]  text-black p-2 mb-3 ${
              question.option4 == curans
                ? "bg-[green]"
                : curans == 4
                ? "bg-[red]"
                : ""
            }`}
            onClick={(event) => {
              let userans = event.target.innerHTML.trim()
              console.log(userans)

              if (userans == finalcorAns) {
                setcurans(userans)
              } else {
                setcurans(4)
              }
            }}
          >
            {question.option4}
          </h1>
        </div>
        <div className="bg-[green] text-black text-center h-auto">
          
         Current answer  {question.Currentanswer}
          </div>
      </div>
    </>
  )
}
