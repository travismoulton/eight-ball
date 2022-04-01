import Select from "react-select";

import classes from "./Questions.module.css";
import { questions } from "../../shared/questions";

export default function Questions({ updateQuestion, questionIndex }) {
  const selectOptions = questions.map((question, i) => ({
    label: question,
    value: i,
  }));

  return (
    <Select
      options={selectOptions}
      className={classes.Select}
      onChange={(e) => updateQuestion({ label: e.label, value: e.value })}
      isSearchable={false}
      placeholder={"Ask the magic 8 ball a question!"}
      value={
        selectOptions.find((option) => option.value === questionIndex) || null
      }
    />
  );
}
