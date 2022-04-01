import { questions } from "../../shared/questions";

export default function TryAgain({
  show,
  setQuestionIndex,
  setBallIdle,
  clearAnswer,
}) {
  const pickRandomQuestion = () => Math.floor(Math.random() * questions.length);

  function clickHandler() {
    clearAnswer();
    setQuestionIndex(pickRandomQuestion());
    setBallIdle();
  }

  return (
    show && (
      <button style={{ marginBottom: "2rem" }} onClick={clickHandler}>
        Ask a random question
      </button>
    )
  );
}
