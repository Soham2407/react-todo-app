import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({
  inputData,
  setInputData,
  items,
  setItems,
  toggleBtn,
  setToggleBtn,
  editItemIndex,
  setEditItemIndex,
}) => {
  const changeInputHandler = (e) => {
    setInputData(e.target.value);
  };

  const addTodo = () => {
    if (!inputData) {
    } else if (inputData && !toggleBtn) {
      setItems(
        items.map((item) => {
          if (item.id === editItemIndex) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );

      setToggleBtn(true);

      setInputData("");

      setEditItemIndex(null);
    } else {
      setItems([...items, { id: uuidv4(), name: inputData }]);
      setInputData("");
    }
  };

  // save data to local storage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);

  return (
    <div className="main-container">
      <header>
        <h1>Todo App</h1>
      </header>
      <div className="input-container">
        <input
          type="text"
          placeholder="✍ Enter Todo"
          className="todo-input"
          value={inputData}
          onChange={changeInputHandler}
        />

        {toggleBtn ? (
          <button className="add-btn" onClick={addTodo}>
            <i className="fas fa-plus "></i>
          </button>
        ) : (
          <button className="edit-btn" onClick={addTodo}>
            <i className="fas fa-edit "></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoInput;
