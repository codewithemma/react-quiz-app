import React, { useState, useCallback } from "react";
import { quizQuestions } from "../Data";
import Result from "./Result";
import Question from "./Question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === quizQuestions.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedOption
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedOption];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizIsComplete) {
    return <Result userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        index={activeQuestionIndex}
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
