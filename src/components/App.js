//SGN
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text:"Learn React", completed: false },
    { id: 2, text:"Do Practice", completed: false },
    { id: 3, text:"getJob", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
        {/*ONS Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent todos={todos} onComplete={handleComplete} />
    </div>
  )
}

export default App
