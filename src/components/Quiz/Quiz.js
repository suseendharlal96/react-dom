import React, { useEffect, useState } from "react";

import "./Quiz.css";

function Quiz() {
  const [ques, setQues] = useState([
    { id: 1, ques: "What will be the answer to 1+1", options: [2, 3, 4, 5], ans: 2, attended: false },
    { id: 2, ques: "What will be the answer to 3+1", options: [2, 3, 4, 5], ans: 2, attended: false },
  ]);
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(0);
  const [unanswered, setUnanswered] = useState([]);
  const [time, setTime] = useState(10);
  let timerId = null;

  useEffect(() => {
    clearInterval(timerId);
    timerId = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          setTime(10);
          setActive((prev) => {
            if (prev >= ques.length - 1) {
              const unattended = ques.filter((que) => que.attended === false);
              setUnanswered(unattended);
              clearInterval(timerId);
            }
            return prev + 1;
          });
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const checkAnswer = (option, { id, ans }) => {
    if (option === ans) {
      document.getElementById(option).style.backgroundColor = "#72994E";
      setScore((prev) => prev + 1);
    } else {
      document.getElementById(option).style.backgroundColor = "red";
    }
    document.getElementById(option).style.color = "#FFFFFF";
    clearInterval(timerId);
    timerId = null;
    setTimeout(() => {
      setActive((prev) => prev + 1);
      setTime(10);
    }, 2000);
    const tempQues = [...ques];
    const attendedQues = tempQues.find((que) => que.id === id);
    attendedQues.attended = true;
    setQues(tempQues);
  };

  return (
    <div className="quiz">
      <div className="quiz-container">
        {active + 1 <= ques.length ? (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Question {active + 1}</p>
              <p>Time Left {time.toString().padStart(2, "0")}</p>
            </div>
            {ques.map((quiz, i) => {
              if (i === active) {
                return (
                  <div className="card-container" key={i}>
                    <div className="ques">{quiz.ques} ?</div>
                    <div className="options">
                      {quiz.options.map((option,i) => (
                        <div key={i} id={option} className="option" onClick={() => checkAnswer(option, quiz)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <div>
            <h3>Score : {score}</h3>
            <h4>Unanswered Question(s) : {unanswered.length}</h4>
            {unanswered.length > 0 && (
              <>
                <ol>
                  {unanswered?.map((unans) => (
                    <li key={unans.id}>{unans.ques} ?</li>
                  ))}
                </ol>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
