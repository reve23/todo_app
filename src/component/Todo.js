import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    console.log(id);
    const updatedData = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedData);
  };
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems(items => [...items, inputData]);
      setInputData("");
    }
  };
  return (
    <>
      <div className="main-div">
        <h2 className="Text">Add Your List Here</h2>
      </div>
      <div className="addItems">
        <input
          type="text"
          className="input"
          placeholder="Add Items Here.."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="btn" onClick={addItem}>
          +
        </button>
      </div>
      <div className="section">
        {items.map((elem, ind) => {
          return (
            <div className="eachitems" key={ind}>
              <h2>{elem}</h2>
              <button onClick={() => deleteItem(ind)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
