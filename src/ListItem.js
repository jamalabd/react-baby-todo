import React from "react";

function ListItem({ listAr, deleteTodo, currentItem }) {
  const style = {
    style1: {
      background: "#fff",
      boxshadow: "1px 1px 1px rgba(0, 0, 0, 0.15)",
      padding: "3px 10px",
      fontsize: "12px",
      marginBottom: "6px",
      marginLeft: "-38px",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    done: {}
  };

  const li = item => {
    return (
      <li style={style.style1} key={item}>
        {item.text}{" "}
        <div>
          <button onClick={() => deleteTodo(item.key)}>x</button>
        </div>
      </li>
    );
  };

  const listItems = listAr.map(li);

  return <ul style2={style.style2}>{listItems}</ul>;
}

export default ListItem;
