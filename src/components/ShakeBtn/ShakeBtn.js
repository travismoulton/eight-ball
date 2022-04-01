import { answers } from "../../shared/answers";

export default function ShakeBtn({ updateAnwser, shakeBall }) {
  function selectRandomAnwser() {
    // Use the spread operator to return a new object even when the same random
    // answer is selected twice in a row. This makes sure that AnswerBoard recieves
    // A new prop and re-renders, guarenteeing the answer component will add that prediciton
    // to the all predictions state
    return { ...answers[Math.floor(Math.random() * answers.length)] };
  }

  function clickHandler() {
    shakeBall();

    return updateAnwser(selectRandomAnwser());
  }

  return (
    <button style={{ marginBottom: "2rem" }} onClick={clickHandler}>
      Shake!
    </button>
  );
}
