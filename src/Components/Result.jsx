import React from "react";
import { quizQuestions } from "../Data";
const Result = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === quizQuestions[index].answer
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <div id="sumamary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((option, index) => {
          let cssClass = "user-answer";
          if (option === null) {
            cssClass += "skipped";
          } else if (option === quizQuestions[index].answer) {
            cssClass += "correct";
          } else {
            cssClass += "wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{quizQuestions[index].question}</p>
              <p className={cssClass}>{option ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Result;
