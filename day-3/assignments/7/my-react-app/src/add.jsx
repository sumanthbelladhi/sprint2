const Add = ({ tasks, setTasks }) => {
  const add = () => {
    const task = prompt("Enter Task");
    const priority = prompt("Enter Priority", "High/Low");
    setTasks((prevTasks) => [
      ...prevTasks,
      { title: task, priority: priority },
    ]);
  };

  return (
    <>
      <button onClick={add}>ADD</button>
    </>
  );
};
export default Add;
