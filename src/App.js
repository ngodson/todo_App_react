import "./App.css";
import React, { useState } from "react";



export default function App() {
  const [todoList, settodoList] = useState([]);
  const [newTask, setnewTask] = useState("");


  const inputValue = (e) => {
    setnewTask(e.target.value);
  };

  const addTask = () => {
    
    if (newTask === "") {
      alert("Enter a valid task");
    } else {
      const newTaskObject = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskNameObject: newTask
      }
      settodoList([...todoList, newTaskObject]);   
      setnewTask("")
    }
    
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if(task === taskName) {
        return false;
      }
      else {
        return true;
      }
    })
    settodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" value={newTask} onChange={inputValue} />
        <button onClick={addTask}>Add Task</button> 
      </div>

      <div className="taskList">
        {todoList.map((index, value) => {
          return ( 
            <div>
          <p key={value}> {index.taskNameObject} </p>
          <button onClick={ () => deleteTask(index) }>Delete</button>
          </div>
          )
        })}
        
      </div>
    </div>
  );
}
