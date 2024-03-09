import React, { useRef } from "react";

const Answers = ({
  answerState,
  answer,
  selectedAnswer,
  handleSelectAnswer,
}) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answer];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      {shuffledAnswers.current.map((option) => {
        let cssClass = "";
        const isSelected = selectedAnswer === option;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          answerState === "correct" ||
          (answerState === "wrong" && isSelected)
        ) {
          cssClass = answerState;
        }
        return (
          <li key={option}>
            <button
              onClick={() => handleSelectAnswer(option)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {option}
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Answers;
