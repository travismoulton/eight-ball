import { questions } from "../../shared/questions";
import classes from "./AnswerBoard.module.css";
import IndividualAnswer from "./IndividualAnswer/IndividualAnswer";

export default function AnswerBoard({ currentQuestion, currentAnswer }) {
  const answers = questions.map((question) => (
    <IndividualAnswer
      question={question}
      currentAnswer={currentAnswer}
      currentQuestion={currentQuestion}
      key={question}
    />
  ));

  return <div className={classes.Board}>{answers}</div>;
}
