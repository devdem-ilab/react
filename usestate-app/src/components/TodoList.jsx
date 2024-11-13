import { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const [taskInput, setTaskInput] = useState("");

    const handleAddTask = () => {
        if (taskInput.trim() !== "") {
          setTasks([...tasks, taskInput]);
          setTaskInput("");
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return(
        <div className="container">
            <h1 className="title">Todo List</h1>
            <div style={{ textAlign: "center", padding: "20px" }}>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new todo"
                style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
            />

            <button
                onClick={handleAddTask}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Add Task
            </button>

            <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
                {tasks.map((task, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                    {task}
                    <button
                    onClick={() => handleRemoveTask(index)}
                    style={{
                        marginLeft: "10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        padding: "0px",
                    }}
                    >
                    ×
                    </button>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default TodoList;
