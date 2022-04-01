import { answers } from "../../shared/answers";

export default function ShakeBtn({
  updateAnwser,
  questionIsPresent,
  shakeBall,
}) {
  function selectRandomAnwser() {
    // Use the spread operator to return a new object even when the same random
    // answer is selected twice in a row. This makes sure that AnswerBoard recieves
    // A new prop and re-renders, guarenteeing the answer component will add that prediciton
    // to the all predictions state
    return { ...answers[Math.floor(Math.random() * answers.length)] };
  }

  function clickHandler() {
    shakeBall();

    // If there is no question, give the user a message
    if (!questionIsPresent)
      return updateAnwser({ value: "You didn't ask a question!" });

    return updateAnwser(selectRandomAnwser());
  }

  return (
    <button style={{ marginBottom: "2rem" }} onClick={clickHandler}>
      Shake!
    </button>
  );
}
