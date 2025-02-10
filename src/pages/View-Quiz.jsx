import React, { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../FirebaseConfig";
import { FaQuestion } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { logincontext } from "../Context/MainContext";

export default function ViewQuiz() {
  const [finalQuiz, setFinalQuiz] = useState([]); // All questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Controls current question
  const [timeLeft, setTimeLeft] = useState(600); // Timer (10 minutes)

  const navigate = useNavigate();
  const { user } = useContext(logincontext);

  // Fetch questions from Firebase
  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "quiz/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let questions = [];

      for (let key in data) {
        questions.push(data[key]);
      }

      setFinalQuiz(questions);
    });
  }, []);

  // Redirect if user is not logged in
  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    }
  }, [user, navigate]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's up! Redirecting...");
      navigate("/result"); // Redirect to results page (change as needed)
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  // Format time in mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="max-w-[500px] mx-auto my-[20px] px-[20px]">
          {finalQuiz.length > 0 ? (
            <>
              {/* Quiz Timer */}
              <div className="text-center text-red-500 font-bold text-xl mb-4">
                Time Left: {formatTime(timeLeft)}
              </div>

              {/* Show only the current question */}
              <QuestionItems question={finalQuiz[currentQuestionIndex]} index={currentQuestionIndex} />

              {/* Next/Previous Buttons */}
              <div className="mb-[10px]">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    className="capitalize bg-green-500 text-black px-6 rounded py-2 mr-2"
                  >
                    Previous
                  </button>
                )}

                {currentQuestionIndex < finalQuiz.length - 1 && (
                  <button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    className="capitalize bg-green-500 text-black px-6 rounded py-2"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          ) : (
            <p>No questions available</p>
          )}
        </div>
      </div>
    </>
  );
}

function QuestionItems({ question, index }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const correctAnswerMap = {
    A: question.option1,
    B: question.option2,
    C: question.option3,
    D: question.option4,
  };

  const correctAnswer = correctAnswerMap[question.Currentanswer.toUpperCase()];

  return (
    <div className="border-2 border-black mb-3 p-4">
      <div className="mb-4">
        <h1 className="capitalize text-blue-500 font-bold">
          Related to: "{question.courseCategory}"
        </h1>
      </div>

      <div className="mb-4">
        <span className="text-black font-bold">{index + 1}.</span>
        <span className="text-red-500 px-2">Q.</span>
        <h1 className="capitalize text-blue-500 font-bold flex items-center">
          {question.question} <FaQuestion className="ml-2" />
        </h1>
      </div>

      {/* Options */}
      {[question.option1, question.option2, question.option3, question.option4].map((option, i) => (
        <div key={i} className="flex bg-gray-300 cursor-pointer p-2 rounded mb-2">
          <h1
            className={`cursor-pointer text-lg w-full text-black p-2 ${
              selectedAnswer === option ? (option === correctAnswer ? "bg-green-500" : "bg-red-500") : ""
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </h1>
        </div>
      ))}

      {/* Show Correct Answer */}
      {selectedAnswer && (
        <div className="bg-green-500 text-black text-center p-2 mt-2">
          Correct Answer: {correctAnswer}
        </div>
      )}
    </div>
  );
}
