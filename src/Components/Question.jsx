import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { quizQuestions } from "../Data";

const Question = ({ index, onSelectAnswer, handleSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: quizQuestions[index].answer === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }
  return (
    <div>
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeOut={answer.selectedAnswer === "" ? handleSkipAnswer : null}
        mode={answerState}
      />
      <h1>{quizQuestions[index].question}</h1>
      <Answers
        answerState={answerState}
        answer={quizQuestions[index].options}
        selectedAnswer={answer.selectedAnswer}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
