import styles from "../Style.module.css";
import { useState } from "react";
import  shortid  from "shortid"

const Form = ({ todo, settodo, todolist, settodolist }) => {
  const hundleChange = (event) => {
    settodo(event.target.value);
  
  };
  const hundlesubmit = (event) => {
    event.preventDefault();
    settodolist([...todolist,{name:todo,id:shortid.generate()}]);
    settodo("")
    console.log(todolist);
  };
  return (
    <div className=" mt-4">
      <form onSubmit={hundlesubmit} action="">
        <input
          onChange={hundleChange}
          value={todo}
          className="w-100 border-0 fs-1 text-center border-bottom-1px border-danger"
          type="text"
          placeholder="add todo item"
        />
        <button
          type="submit"
          className="w-100 text-center fs-1 mt-1 text-light bg-danger"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default Form;
