import { useState, useEffect } from "react";

import "./App.css";
import EightBall from "./components/EightBall/EightBall";
import Questions from "./components/Questions/Questions";
import ShakeBtn from "./components/ShakeBtn/ShakeBtn";
import CurrentAnswer from "./components/CurrentAnswer/CurrentAnswer";

function App() {
  useEffect(() => {
    document.title = "Magic 8 ball";
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswer, setCurrentAnwser] = useState(null);

  function updateQuestion(question) {
    setCurrentQuestion({ label: question.label, value: question.value });
  }

  console.log(currentAnswer);

  return (
    <div className="App">
      <EightBall />
      <Questions updateQuestion={updateQuestion} />
      <ShakeBtn updateAnwser={setCurrentAnwser} />
      <CurrentAnswer currentAnswer={currentAnswer} />
    </div>
  );
}

export default App;
