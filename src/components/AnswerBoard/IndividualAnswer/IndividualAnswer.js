import { useState, useEffect } from "react";

import { answers } from "../../../shared/answers";
import classes from "../AnswerBoard.module.css";

export default function IndividualAnswer({
  question,
  currentQuestion,
  currentAnswer,
}) {
  const [allPredictions, setAllPredictions] = useState([]);

  const answerValues = [0, 10, 25, 50, 75, 90, 98, 100];

  useEffect(() => {
    if (question === currentQuestion?.label && currentAnswer) {
      setAllPredictions((prevAllPredictions) => [
        ...prevAllPredictions,
        currentAnswer.score,
      ]);
    }
  }, [question, currentAnswer, currentQuestion]);

  const averagePredictionScore =
    allPredictions.reduce((prevVal, curVal) => prevVal + curVal, 0) /
    allPredictions.length;

  function getClosestPrediction() {
    const closestScore = answerValues.reduce((a, b) =>
      Math.abs(b - averagePredictionScore) <
      Math.abs(a - averagePredictionScore)
        ? b
        : a
    );

    if (!closestScore) return;

    // Retrieve the answer object where the value is the closest score
    return answers.find((answer) => answer.score === closestScore);
  }

  const prediction = getClosestPrediction();

  return (
    <div className={classes.AnswerRow}>
      <p>{question}</p>
      <p>
        {prediction ? prediction.value : "You didn't ask yet!"}{" "}
        {allPredictions.length !== 0 &&
          Math.round(averagePredictionScore) + " %"}
      </p>
    </div>
  );
}
