import { answers } from "../../shared/answers";

export default function ShakeBtn({ updateAnwser, shakeBall }) {
  function selectRandomAnwser() {
    function randomlyAddThree() {
      const randomValue = Math.random();
      if (randomValue > 0.6) {
        return 3;
      } else if (randomValue > 0.3) {
        return 1;
      } else return 0;
    }

    const answerIndex =
      Math.floor(Math.random() * answers.length) + randomlyAddThree();

    // Use the spread operator to return a new object even when the same random
    // answer is selected twice in a row. This makes sure that AnswerBoard recieves
    // A new prop and re-renders, guarenteeing the answer component will add that prediciton
    // to the all predictions state

    // If the the index is greater than the lenght of the array, return the last index as to
    // not attempt to access an index that doesn't exist
    if (answerIndex > answers.length - 1)
      return { ...answers[answers.length - 1] };

    return { ...answers[answerIndex] };
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
