import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodolist] = useState([
     
  ]);
const addtodoitem=()=>{
  const item={
    id:Date.now(),
    text:input,
    completed:false,
  }
  setTodolist(prev=>[...prev, item]);
  setInput("");

}

const toggleCompleted=(id)=>{
  setTodolist(
    todoList.map(t=>{
      if(t.id===id){
        return {
          ...t,
          completed:!t.completed
        }
      }
     
    })
  )
}
const deletetodo=(id)=>{
setTodolist(
  todoList.filter(
    (t)=>(t.id!==id)
  )
)
}
  return (
    <div>
      <div>Todo List</div>
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={()=>addtodoitem()}>ADD</button>

      <ul>
        {todoList.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={()=>toggleCompleted(t.id)} />
            <span className={t.completed?'strike':""}>{t.text}</span>
            <button onClick={()=>deletetodo(t.id)}>delete</button>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default App;
