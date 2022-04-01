import { useState, useEffect } from "react";

import { questions } from "./shared/questions";
import "./App.css";
import BallAndShakeWrapper from "./components/BallAndShakeWrapper/BallAndShakeWrapper";
import ShowBoardBtn from "./components/ShowBoardBtn/ShowBoardBtn";
import EightBall from "./components/EightBall/EightBall";
import Questions from "./components/Questions/Questions";
import ShakeBtn from "./components/ShakeBtn/ShakeBtn";
import CurrentAnswer from "./components/CurrentAnswer/CurrentAnswer";
import AnswerBoard from "./components/AnswerBoard/AnswerBoard";
import TryAgain from "./components/TryAgain/TryAgain";

function App() {
  useEffect(() => {
    document.title = "Magic 8 ball";
  }, []);

  const [showBall, setShowBall] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [currentAnswer, setCurrentAnwser] = useState(null);
  const [showBoard, setShowBoard] = useState(true);

  function updateQuestionIndex(question) {
    // Remove the old anwser when updating the question
    setCurrentAnwser(null);

    setQuestionIndex(question.value);
  }

  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    setShowBall(!!currentQuestion);
    setShowBoard(!currentQuestion);
  }, [currentQuestion]);

  function showBoardAndHideBall() {
    setShowBall(false);
    setShowBoard(true);
    setCurrentAnwser(null);
    setQuestionIndex(null);
  }

  return (
    <div className="App">
      {!showBall && <h3>Ask a question to show the magic 8 ball!</h3>}
      <Questions
        updateQuestion={updateQuestionIndex}
        questionIndex={questionIndex}
      />
      {showBall && (
        <BallAndShakeWrapper
          updateAnswer={setCurrentAnwser}
          show={showBall}
          currentQuestion={currentQuestion}
          setQuestionIndex={setQuestionIndex}
        />
      )}
      <CurrentAnswer currentAnswer={currentAnswer} />
      {!showBoard && <ShowBoardBtn toggleBoard={showBoardAndHideBall} />}
      <AnswerBoard
        currentAnswer={currentAnswer}
        currentQuestion={currentQuestion}
        showBoard={showBoard}
      />
    </div>
  );
}

export default App;

// <>
// <EightBall />
// <ShakeBtn
//   updateAnwser={setCurrentAnwser}
//   questionIsPresent={!!currentQuestion}
// />
// <TryAgain show={showTryAgain} setQuestionIndex={setQuestionIndex} />
// </>
