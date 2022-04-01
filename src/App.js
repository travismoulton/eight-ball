import { useState, useEffect } from "react";

import { questions } from "./shared/questions";
import "./App.css";
import BallAndShakeWrapper from "./components/BallAndShakeWrapper/BallAndShakeWrapper";
import ShowBoardBtn from "./components/ShowBoardBtn/ShowBoardBtn";
import Questions from "./components/Questions/Questions";
import CurrentAnswer from "./components/CurrentAnswer/CurrentAnswer";
import AnswerBoard from "./components/AnswerBoard/AnswerBoard";

function App() {
  useEffect(() => {
    document.title = "Magic 8 ball";
  }, []);

  const [showBall, setShowBall] = useState(false);
  const [showBoard, setShowBoard] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  function updateQuestionIndex(question) {
    // Remove the old anwser when updating the question
    setCurrentAnswer(null);

    setQuestionIndex(question.value);
  }

  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    // When the board is showing, and the user asks a question, hide the board and show the ball
    // and shake button
    if (showBoard && currentQuestion) {
      setShowBall(true);
      setShowBoard(false);
    }
  }, [currentQuestion, showBoard]);

  // This will be called from the show board button when the user wants to stop
  // asking questions and look at the prediction board
  function showBoardAndHideBall() {
    setShowBall(false);
    setShowBoard(true);

    // Whenever transitioning from showBall to showBoard state, the question
    // and anwser should be reset
    setCurrentAnswer(null);
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
          updateAnswer={setCurrentAnswer}
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
