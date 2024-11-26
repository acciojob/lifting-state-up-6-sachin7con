//SGN
import React, {useState} from "react";

const ChildComponent = ({todos, onComplete}) => {
  
const handleCompteted = (id) => {
    onComplete(id);
}    

  return (
    <div>
        {/*ONS Do not remove the main div */}
        <h3>Child Component</h3>
        <ul>
        {todos.map((todo) => (
            
            <li key={todo.id}>{todo.text} { !todo.completed && (<button onClick={() => handleCompteted(todo.id)}>Complete</button>)} </li>

            
        ))}
        </ul>
    </div>
  )
}

export default ChildComponent
