import React, { useState } from "react";

const ListButtons = ({ list, setList, setIsUpdated }) => {
  const [selecting, setSelecting] = useState(false);

  const saveList = () => {
    setIsUpdated(false);
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/task/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => {
        if (res.status !== 200) alert("Error when saving list");
        return res.json();
      })
      .then((data) => {
        setList({
          ...list,
          _id: data._id,
        });
      });
  };

  const updateList = () => {
    setIsUpdated(false);
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/task/list/${list._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    }).then((res) => {
      if (res.status !== 200) alert("Error when updating list");
    });
  };

  const loadList = (_id) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/task/list/${_id}`).then(
      (res) => {
        res.json().then((data) => {
          setList(data.list);
          setIsUpdated(false);
        });
      },
    );
  };

  return (
    <div className="mt-4 flex h-12 w-full items-center space-x-3 bg-none text-lg font-semibold text-white drop-shadow-md">
      <div
        className={
          "flex h-10 items-center justify-center rounded-lg border-2 border-[#AF7EEB] " +
          "text-lg font-semibold text-[#AF7EEB] transition-all duration-200 " +
          (!selecting
            ? "w-1/3 cursor-pointer ease-in-out hover:scale-105 active:scale-100 active:bg-[#AF7EEB] active:text-white "
            : "w-full")
        }
      >
        {selecting ? (
          <input
            autoFocus
            onBlur={() => setSelecting(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              loadList(e.target.value);
              setSelecting(false);
            }}
            className={
              "h-full w-full rounded-lg px-2 outline-none " +
              "text-lg font-medium text-[#787f96] "
            }
            placeholder="Enter list ID"
          ></input>
        ) : (
          <span
            className="w-full text-center"
            onClick={() => setSelecting(true)}
          >
            Load
          </span>
        )}
      </div>
      {!selecting && (
        <>
          <button
            onClick={updateList}
            className={
              "flex h-10 w-1/3 items-center justify-center rounded-lg border-2 border-[#AF7EEB] " +
              "text-lg font-semibold text-[#AF7EEB] " +
              "cursor-pointer transition duration-200 ease-in-out hover:scale-105 active:scale-100 active:bg-[#AF7EEB] active:text-white "
            }
          >
            Update
          </button>
          <button
            onClick={saveList}
            className={
              "flex h-10 w-1/3 items-center justify-center rounded-lg border-2 border-[#AF7EEB] " +
              "text-lg font-semibold text-[#AF7EEB] " +
              "cursor-pointer transition duration-200 ease-in-out hover:scale-105 active:scale-100 active:bg-[#AF7EEB] active:text-white "
            }
          >
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default ListButtons;
