import React from "react"
import Header from "../Common/Header"
import { getDatabase, ref, set } from "firebase/database"
import { app } from "../FirebaseConfig"

export default function AddQuiz() {
  const db = getDatabase(app)
  let saveQuiz = (event) => {
    event.preventDefault()

    let obj = {
      courseCategory: event.target.courseCategory.value,
      question: event.target.question.value,
      option1: event.target.option1.value,
      option2: event.target.option2.value,
      option3: event.target.option3.value,
      option4: event.target.option4.value,
      Currentanswer: event.target.Currentanswer.value,
    }
    console.log(obj)
    set(ref(db, "quiz/" + "quizId" + new Date().getTime()), obj)
    event.target.reset();
  }
  return (
    <>
      <Header />
      <div className="w-[100%] ">
        <div className="max-w-[500px] grid grid-cols-1 mx-auto shadow-[rgba(0,0,15,0.5)_0px_0px_4px_2px] my-[20px] px-[20px]">
          <h5 className="text-center">Add Quiz</h5>
          <form className="grid gri-cols-1" onSubmit={saveQuiz}>
            <div className="w-[100%]">
              <select
                className="border-[2px]  border-[solid] border-[#ccc] my-[10px] w-[100%] rounded-[3px]"
                name="courseCategory"
              >
                <option value="Select Quiz Category">
                  Select Quiz Category
                </option>
                <option value="HTML5">HTML5 </option>
                <option value="CSS3">CSS3</option>
                <option value="React">React </option>
                <option value="Node.js">Node.js</option>
                <option value="Express">Express</option>
                <option value="Bootstrap">Bootstrap</option>
              </select>
            </div>
            <div className="w-[100%]">
              <textarea
                className="h-[100px]  border-[2px] border-[solid] border-[#ccc] mb-[15px] w-[100%] rounded-[3px]"
                name="question"
              ></textarea>
            </div>
            <div className="w-[100%] mb-[15px] rounded-[3px]">
              <input
                type="text"
                name="option1"
                placeholder="Enter OPtion 1"
                className="w-[100%] border-[2px] border-[solid] border-[#ccc] rounded-[3px] "
              />
            </div>
            <div className="w-[100%] mb-[15px] rounded-[3px]">
              <input
                type="text"
                name="option2"
                placeholder="Enter OPtion 2"
                className="w-[100%] border-[2px] border-[solid] border-[#ccc] rounded-[3px] "
              />
            </div>
            <div className="w-[100%] mb-[15px] rounded-[3px]">
              <input
                type="text"
                name="option3"
                placeholder="Enter OPtion 3"
                className="w-[100%] border-[2px] border-[solid] border-[#ccc] rounded-[3px] "
              />
            </div>
            <div className="w-[100%] mb-[15px] rounded-[3px]">
              <input
                type="text"
                name="option4"
                placeholder="Enter OPtion 4"
                className="w-[100%] border-[2px] border-[solid] border-[#ccc] rounded-[3px] "
              />
            </div>
            <div className="w-[100%] mb-[15px] ">
              <input
                name="Currentanswer"
                type="text"
                placeholder="Enter Correct option"
                className="w-[100%] border-[2px] border-[solid] border-[#ccc] rounded-[3px]  "
              />
            </div>
            <div className="w-[100%] mb-[15px] ]">
              <button className="capitalize bg-[green] text-white w-[100%] py-[5px] rounded-[4px]">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
