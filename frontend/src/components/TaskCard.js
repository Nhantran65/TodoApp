import React from "react";

const TaskCard = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="flex w-full cursor-pointer select-none items-center">
      <div
        data-testid="task"
        onClick={() => toggleTask(task._id)}
        className="group flex grow items-center space-x-3"
      >
        <div
          className={
            "h-3 w-3 rounded-full border-2 border-[#4B5563] transition-colors duration-100 group-hover:border-[#60A5FA] " +
            (task.done ? "border-none bg-[#60A5FA]" : "")
          }
        ></div>
        <span
          className={
            "w-5/6 " +
            (task.done
              ? "w-18 text-[#E5E7EB] line-through decoration-[3px]"
              : "")
          }
        >
          <span className="break-words text-lg text-[#4B5563] transition-colors duration-100 group-hover:text-[#60A5FA]">
            {task.title}
          </span>
        </span>
      </div>
      <button data-testid="delete-button" onClick={() => deleteTask(task._id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#4B5563] transition-colors duration-100 hover:text-[#60A5FA]"
          viewBox="0 0 41.756 41.756"
          fill="currentColor"
        >
          <path
              fillRule="evenodd"
              d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
                  c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
                  C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
                  c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"
              clipRule="evenodd"
            />
        </svg>
      </button>
    </div>
  );
};

export default TaskCard;