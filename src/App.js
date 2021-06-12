import { useState } from "react";
import "./styles/app.scss";
// import components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const getTodosFromStorage = () => {
  let todos = localStorage.getItem("todoList");

  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

function App() {
  // State
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getTodosFromStorage());
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editItemIndex, setEditItemIndex] = useState(null);

  return (
    <div>
      <TodoInput
        inputData={inputData}
        setInputData={setInputData}
        items={items}
        setItems={setItems}
        toggleBtn={toggleBtn}
        setToggleBtn={setToggleBtn}
        editItemIndex={editItemIndex}
        setEditItemIndex={setEditItemIndex}
      />
      <TodoList
        inputData={inputData}
        setInputData={setInputData}
        items={items}
        setItems={setItems}
        setToggleBtn={setToggleBtn}
        editItemIndex={editItemIndex}
        setEditItemIndex={setEditItemIndex}
      />
    </div>
  );
}

export default App;
