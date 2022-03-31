import Select from "react-select";

import classes from "./Questions.module.css";
import { questions } from "../../shared/questions";

export default function Questions({ updateQuestion }) {
  const selectOptions = questions.map((question, i) => ({
    label: question,
    // Use the question index as value, it will not be used anywhere in the app
    value: i,
  }));

  return (
    <Select
      options={selectOptions}
      className={classes.Select}
      onChange={(e) => updateQuestion({ label: e.label, value: e.value })}
      isSearchable={false}
      placeholder={"Ask the magic 8 ball a question!"}
    />
  );
}
