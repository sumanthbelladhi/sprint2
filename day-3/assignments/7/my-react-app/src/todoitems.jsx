function Todolist({ tasks, setTasks }) {
  return (
    <>
      <ul>
        {tasks.map((ele, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{
                display: "flex",
                backgroundColor: "orange",
                padding: "20px",
                margin: "20px",
                borderRadius: "10px",
                width: "90vw",
                justifyContent: "space-between",
                fontSize: "20px",
              }}
            >
              <li>{ele.title}</li>
              <small>{ele.priority}</small>
            </div>
          );
        })}
      </ul>
    </>
  );
}
export default Todolist;
