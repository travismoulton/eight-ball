import { useState } from "react";

import EightBall from "../EightBall/EightBall";
import ShakeBtn from "../ShakeBtn/ShakeBtn";
import TryAgain from "../TryAgain/TryAgain";

export default function BallAndShakeWrapper({
  updateAnswer,
  currentQuestion,
  setQuestionIndex,
}) {
  const [ballIdle, setBallIdle] = useState(true);
  const [ballShaken, setBallShaken] = useState(false);

  function shakeBall() {
    setBallIdle(false);
    setBallShaken(true);
  }

  function setBallIdleHandler() {
    setBallShaken(false);
    setBallIdle(true);
  }

  return (
    <>
      <EightBall />
      {ballIdle && (
        <ShakeBtn
          updateAnwser={updateAnswer}
          questionIsPresent={!!currentQuestion}
          shakeBall={shakeBall}
        />
      )}
      <TryAgain
        show={ballShaken}
        setBallIdle={setBallIdleHandler}
        setQuestionIndex={setQuestionIndex}
      />
    </>
  );
}