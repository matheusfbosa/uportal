import { useState, useEffect } from "react";
import { listenEvent } from "@uportal/utils";

import TaskTable from "./components/TaskTable";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listenEvent("@uportal/tasks/todo/add-task", (event: CustomEvent) => {
      setTasks((tasks) => [...tasks, event.detail]);
    });
  }, []);

  return <TaskTable tasks={tasks} />;
};

export default App;
