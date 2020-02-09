import React, { Fragment } from "react";

function Todo({ inputElement, handleInput, addTodo, currentItem }) {
  const style = {
    stInput: {
      backgroundColor: "#fff",
      borderRadius: "3px",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)",
      padding: "3px 10px",
      width: "94%"
    }
  };
  return (
    <Fragment>
      <form onSubmit={addTodo}>
        <input
          style={style.stInput}
          type="text"
          onChange={handleInput}
          ref={inputElement}
          value={currentItem.text}
        />
      </form>
    </Fragment>
  );
}

export default Todo;
