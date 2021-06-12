import Todos from "./Todos";

const TodoList = ({
  inputData,
  setInputData,
  items,
  setItems,
  setToggleBtn,
  editItemIndex,
  setEditItemIndex,
}) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {items.map((item) => (
          <Todos
            key={item.id}
            id={item.id}
            todoName={item.name}
            inputData={inputData}
            setInputData={setInputData}
            items={items}
            setItems={setItems}
            setToggleBtn={setToggleBtn}
            editItemIndex={editItemIndex}
            setEditItemIndex={setEditItemIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
