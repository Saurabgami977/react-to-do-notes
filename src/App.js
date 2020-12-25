import React, { useState } from "react";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid tomato;
  outline: none;
  width: 300px;
  font-size: 20px;
`;
const Button = styled.button`
  outline: none;
  border: none;
  margin: 10px;
  border: 1px solid lightblue;
  cursor: pointer;
  padding: 15px 20px;
`;
const Button2 = styled.button`
  outline: none;
  border: none;
  margin: 10px;
  border: 1px solid lightblue;
  cursor: pointer;
`;
const Icon = styled.i`
  font-size: 18px;
  margin: 10px;
  color: tomato;
`;
export default function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added");
    setToDoList((prevState) => [...prevState, input]);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (i) => {
    //prevState ???
    setToDoList((prevState) => prevState.filter((a, index) => index !== i));
  };

  return (
    <div className="App">
      <h1>To Do Notes</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add Item"
          value={input}
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </form>
      {toDoList.map((toDo, i) => {
        return (
          <div>
            <div style={{ margin: 0 }}>
              <p
                style={{
                  display: "inline-block",
                  fontSize: 20,
                  width: 250,
                  backgroundColor: "lightblue",
                  textAlign: "left",
                  padding: "10px 20px",
                  color: "black"
                }}
              >
                {toDo}
              </p>

              <Button2 onClick={() => handleDelete(i)}>
                <Icon className="fas fa-trash" />
              </Button2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
