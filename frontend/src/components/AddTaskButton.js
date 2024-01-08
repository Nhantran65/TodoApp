import React, { useState } from "react";

const AddTaskButton = ({ addTask }) => {
  const [isSettingNewTask, setIsSettingNewTask] = useState(false);

  return (
    <div className="flex h-0 w-full justify-center">
      <div
        onClick={() => setIsSettingNewTask(!isSettingNewTask)}
        className={
          "absolute -bottom-6 flex h-12 w-2/5 items-center justify-center rounded-full bg-[#60A5FA] " +
          "text-lg font-semibold text-white drop-shadow-md " +
          "cursor-pointer transition-all duration-200 hover:bg-[#3B82F6] " +
          (isSettingNewTask ? "!w-4/5" : "")
        }
      >
        {!isSettingNewTask ? (
          <>
            <span className="h-8 text-xl font-bold">+</span>
            <span className="ml-1">Add task</span>
          </>
        ) : (
          <input
            data-testid="new-task-input"
            autoFocus
            onBlur={() => setIsSettingNewTask(false)}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setIsSettingNewTask(false);
              if (e.target.value === "") return;
              addTask(e.target.value);
            }}
            type="text"
            className="text-md h-full w-full rounded-full border-4 border-[#3B82F6] px-3 font-normal text-[#4B5563] focus:border-[#60A5FA] focus:outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default AddTaskButton;