//SGN, ONS
import React from "react";




const ChildComponent = ({todos, onComplete}) => {
  
  return(
    <div>
      <h2>Child Component</h2>
      <ul>
      {todos.map((task) => (
            <li key={task.id}>{task.text}  
            {!task.completed && (<button style={{display: task.completed ? 'none' : 'inline-block'}} onClick={() => onComplete(task.id)}>Complete</button>)}
            </li>            
          ))}
      </ul>
    </div>
  )
}

export default ChildComponent;
