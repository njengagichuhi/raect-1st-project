import React from "react";
import Todo from "./Todo";
const Todolist = ({ todolist,settodolist}) => {
  return (
    <div>
      {todolist.map((todoitem) => (
        <Todo settodolist={settodolist} key={todoitem.id} todoitem={todoitem} />
      ))}
    </div>
  );
};

export default Todolist;
