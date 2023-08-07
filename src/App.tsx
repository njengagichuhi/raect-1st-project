import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
const App = () => {
  const [todo, settodo] = useState("");
  const [todolist, settodolist] = useState([]);

  return (
    <div>
      <Header />

      <Form
        todo={todo}
        settodo={settodo}
        todolist={todolist}
        settodolist={settodolist}
      ></Form>
      <Todolist settodolist={settodolist} todolist={todolist}/>
    </div>
  );
};

export default App;
