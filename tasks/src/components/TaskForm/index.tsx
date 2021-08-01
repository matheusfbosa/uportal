import { useState } from "react";
import { v4 } from "uuid";

import { emitEvent } from "@uportal/utils";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    margin: {
      margin: theme.spacing(2),
    },
  })
);

const TaskForm = () => {
  const classes = useStyles();

  const initialState = {
    name: "",
    description: "",
  };

  const [task, setTask] = useState(initialState);

  const handleForm = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emitEvent("@uportal/tasks/todo/add-task", {
      id: v4(),
      name: task.name,
      description: task.description,
    });
    setTask(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        className={classes.margin}
        value={task.name}
        onChange={handleForm}
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        className={classes.margin}
        value={task.description}
        onChange={handleForm}
        variant="outlined"
        maxRows={4}
        multiline
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
};

export default TaskForm;
