import React from "react";

const Todo = ({ todoitem, todolist, settodolist }) => {
  const deleteTodo = () => {
    settodolist(todolist.filter((item)=>item.id !== todoitem.id));
  };
  return (
    <div>
      <div className="m-0 border-success p-2 mt-3">
        <h3>{todoitem.name}</h3>
        <button
          onClick={deleteTodo}
          className="text-center fs-1 mt-1 text-light bg-warning rounded-3"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
