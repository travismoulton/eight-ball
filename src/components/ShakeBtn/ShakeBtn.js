import { answers } from "../../shared/answers";

export default function ShakeBtn({ updateAnwser }) {
  function selectRandomAnwser() {
    return answers[Math.floor(Math.random() * answers.length)];
  }

  return (
    <button
      style={{ marginBottom: "2rem" }}
      onClick={() => updateAnwser(selectRandomAnwser())}
    >
      Shake!
    </button>
  );
}
