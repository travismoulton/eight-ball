import { questions } from "../../shared/questions";

export default function TryAgain({ show, setQuestionIndex, setBallIdle }) {
  const pickRandomQuestion = () => Math.floor(Math.random() * questions.length);

  function clickHandler() {
    setQuestionIndex(pickRandomQuestion());
    setBallIdle();
  }

  return show && <button onClick={clickHandler}>Try again!</button>;
}
