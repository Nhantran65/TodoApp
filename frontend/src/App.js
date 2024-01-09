// App.jsx
import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import AddTaskButton from "./components/AddTaskButton";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiURL = "http://172.16.6.255:4040"
  useEffect(() => {
    fetch(`${apiURL}/api/v1/tasks/list/659c5ed8068a2944e93e0c69`).then((res) => {
      res.json().then((data) => {
        setTasks(data);
        setLoading(false);
      });
    });
  }, []);

  const toggleTask = (_id) => {
    const newTasks = [...tasks];
    tasks.forEach((task) => {
      if (task._id === _id) {
        task.done = !task.done;
        return;
      }
    });

    setTasks(newTasks);
  };

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        _id: tasks.length,
        title: title,
        done: false,
      },
    ]);
  };

  const deleteTask = (_id) => {
    setTasks(tasks.filter((task) => task._id !== _id));
  };

  return (
    <div className="flex h-screen w-full justify-center bg-yellow-300"> {/* Change background color to yellow */}
      <div className="mt-16 flex w-3/4 min-h-3/4vh flex-col space-y-4"> {/* Adjust width and height as needed */}
        <header className="flex h-16 w-full items-center justify-center bg-blue-500 text-lg font-semibold text-white drop-shadow-xl"> {/* Change background color to blue */}
          My Todo App
        </header>
        <main className="w-full space-y-4 bg-white px-20 py-12 drop-shadow-xl transition-all duration-300"> {/* Adjust padding as needed */}
          {loading ? (
            <div className="flex h-40 items-center justify-center">
              <p className="text-3xl italic text-gray-400">Loading...</p> {/* Adjust font size as needed */}
            </div>
          ) : tasks.length === 0 ? (
            <div className="flex h-40 items-center justify-center">
              <p className="text-3xl italic text-gray-400">No tasks yet</p> {/* Adjust font size as needed */}
            </div>
          ) : null}
          {tasks.map((task, i) => (
            <TaskCard
              key={i}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
          <AddTaskButton addTask={addTask} />
        </main>
      </div>
    </div>
  );
};

export default App;
