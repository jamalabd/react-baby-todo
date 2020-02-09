import React, { Fragment } from "react";
import Input from "./Input";
import ListItem from "./ListItem";

function Todo({
  inputElement,
  handleInput,
  addTodo,
  currentItem,
  deleteTodo,
  listAr
}) {
  const style = {
    st: {
      background: "#e8e8e8",
      borderRadius: "4px",
      padding: "5px",
      minWidth: "400px"
    }
  };

  return (
    <div style={style.st}>
      <Input
        inputElement={inputElement}
        addTodo={addTodo}
        currentItem={currentItem}
        handleInput={handleInput}
      />
      <ListItem
        listAr={listAr}
        deleteTodo={deleteTodo}
        currentItem={currentItem}
      />
    </div>
  );
}

export default Todo;
