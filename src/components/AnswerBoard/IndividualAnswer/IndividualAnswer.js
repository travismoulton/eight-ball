import { useState, useEffect } from "react";

import { answers } from "../../../shared/answers";
import classes from "../AnswerBoard.module.css";

export default function IndividualAnswer({
  question,
  currentQuestion,
  currentAnswer,
}) {
  const [allPredictions, setAllPredictions] = useState([]);

  // This will be used when finding the correct prediction object
  // based on the average prediciton score
  const answerValues = answers.map((answer) => answer.score);

  useEffect(() => {
    const thisQuestionHasBeenAsked =
      question === currentQuestion && currentAnswer;

    if (thisQuestionHasBeenAsked) {
      setAllPredictions((prevAllPredictions) => [
        ...prevAllPredictions,
        currentAnswer.score,
      ]);
    }
  }, [question, currentAnswer, currentQuestion]);

  // Get the average prediction score by reducing all the values from the predictions
  // array and dividing by the array
  const averagePredictionScore =
    allPredictions.reduce((prevVal, curVal) => prevVal + curVal, 0) /
    allPredictions.length;

  function getClosestPrediction() {
    // compare each value in the array to the averagePredictionScore
    // Return the closest value to access that prediction object
    const closestScore =
      allPredictions.length !== 0 &&
      answerValues.reduce((a, b) => {
        return Math.abs(b - averagePredictionScore) <
          Math.abs(a - averagePredictionScore)
          ? b
          : a;
      });

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
          `(${Math.round(averagePredictionScore)} %)`}
      </p>
    </div>
  );
}
