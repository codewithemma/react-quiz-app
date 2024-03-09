import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      max={timeout}
      value={remainingTime}
      id="question-timer"
      className={mode}
    />
  );
};

export default QuestionTimer;
