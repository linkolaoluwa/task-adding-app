import React from 'react'

export const Task = (props) => {
  return (
    <div className='task-content' >
            <h5>{props.taskName}</h5>
            <button className='btn2' onClick={() => props.deleteTask(props.id)}>x</button>
            <button className='btn3' onClick={() => props.completedTask(props.id)} 
            style={{backgroundColor: props.completed ? 'green' : 'white', color: props.completed ? 'white' : 'black'}}
            >v</button>
         
       
    </div>
  )
}
export default Task