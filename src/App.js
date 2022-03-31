import { useState, useEffect } from "react";

import "./App.css";
import EightBall from "./components/EightBall/EightBall";
import Questions from "./components/Questions/Questions";
import ShakeBtn from "./components/ShakeBtn/ShakeBtn";
import CurrentAnswer from "./components/CurrentAnswer/CurrentAnswer";
import AnswerBoard from "./components/AnswerBoard/AnswerBoard";

function App() {
  useEffect(() => {
    document.title = "Magic 8 ball";
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswer, setCurrentAnwser] = useState(null);

  function updateQuestion(question) {
    // Remove the old anwser when updating the question
    setCurrentAnwser(null);

    setCurrentQuestion(question);
  }

  return (
    <div className="App">
      <EightBall />
      <Questions updateQuestion={updateQuestion} />
      <ShakeBtn updateAnwser={setCurrentAnwser} />
      <CurrentAnswer currentAnswer={currentAnswer} />
      <AnswerBoard
        currentAnswer={currentAnswer}
        currentQuestion={currentQuestion}
      />
    </div>
  );
}

export default App;
