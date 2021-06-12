const Todos = ({
  id,
  todoName,
  inputData,
  setInputData,
  items,
  setItems,
  setToggleBtn,
  editItemIndex,
  setEditItemIndex,
}) => {
  const deleteTodo = (id) => {
    const updatedItems = items.filter((item, index) => {
      return item.id !== id;
    });
    setItems(updatedItems);
  };

  const editTodo = (id) => {
    const todo = items.find((item) => {
      return item.id === id;
    });
    console.log(todo);

    setToggleBtn(false);

    setInputData(todo.name);

    setEditItemIndex(id);
  };

  return (
    <div className="todo">
      <h3>{todoName}</h3>
      <button className="edit-btn">
        <i
          className="fas fa-edit"
          title="Edit Item"
          onClick={() => {
            editTodo(id);
          }}
        ></i>
      </button>

      <button
        className="trash-btn"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <i className="fas fa-trash" title="Delete Item"></i>
      </button>
    </div>
  );
};

export default Todos;
