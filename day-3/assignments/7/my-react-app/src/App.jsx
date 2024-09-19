import { useState } from "react";
import Todolist from "./todoitems";
import Add from "./add";
function App() {
  const [tasks, setTasks] = useState([
    { title: "Read", priority: "High" },
    { title: "Sleep", priority: "Low" },
  ]);

  return (
    <>
      <Todolist tasks={tasks} setTasks={setTasks} />
      <Add tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
