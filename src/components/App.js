//SGN, JSP, JSLN, JSRK, JSSR, JBB, JMD, JSM, JSVM
import React, {useState, useEffect} from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
const[todos, setTodos] = useState([
  {id: 1, text: "Learn React", completed: false }, 
  {id: 2, text: "Build a React app", completed: false }, 
  { id: 3, text: "Deploy the React app", completed: false },
])


const handleComplete = (id) => {
  
  setTodos((prev) => 
    prev.map(task => task.id === id ? {...task, completed: true} : task)  
  );
  
  
}

useEffect(() => {
  console.log("Updated Todos:", todos);
}, [todos]);


  return(
    <div>
      <h1>Parent Component</h1>
      <ChildComponent todos={todos} onComplete={handleComplete}/>
    </div>
  )
}

export default App
