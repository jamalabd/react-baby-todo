import React, { useState, useRef, useEffect } from "react";
import Todo from "./Todo";

function App() {
  const [state, setState] = useState({
    list: [],
    currentItem: { text: " ", key: " ", completed: false }
  });

  const inputElement = useRef();

  useEffect(() => {
    // inputElement.current.focus();
  }, []);

  const handleInput = e => {
    const currentValue = e.target.value;
    console.log(currentValue);
    const newItems = { text: currentValue, key: Date.now(), completed: false };
    // console.log(newItems);

    setState({
      list: state.list,
      currentItem: newItems
    });
  };

  const addTodo = e => {
    e.preventDefault();
    let item = state.currentItem;
    console.log(state.currentItem);
    if (item.text !== " ") {
      const list = [...state.list, item];
      setState({
        list: list,
        currentItem: { text: " ", key: " ", completed: false }
      });
    }
  };

  const deleteTodo = key => {
    const filterd = state.list.filter(item => item.key !== key);
    setState({
      list: filterd,
      currentItem: state.currentItem
    });
  };

  const style = {
    st1: {
      backgroundColor: "blue",
      display: "flex",
      width: "100rem",
      height: "100rem",
      justifyContent: "center",
      alignItems: "center"
    }
  };

  return (
    <div style={style.st1}>
      <Todo
        inputElement={inputElement}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        currentItem={state.currentItem}
        handleInput={handleInput}
        listAr={state.list}
      />
    </div>
  );
}

export default App;
