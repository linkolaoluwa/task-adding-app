import React from 'react'
import './App.css'
import Task from './Task'


function App() {
 const [todoList, setTodoList] = React.useState([])
 const [newTask, setNewTask] = React.useState('')

 const handleChange =(e) => {
    setNewTask(e.target.value)
        
  }

  const addTask = () => {

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask, 
    }
    setTodoList([...todoList, task]) 
 }
  const deleteTask = (id) => {
    setTodoList(todoList.filter(task => task.id !== id))
  }
   const completedTask = (id) => {
    setTodoList(todoList.map(task => {
      if(task.id === id){
        return {...task, completed: true}
      } else {
        return task
      }
    }))
   }
 
  return (
    <div className='app'>
      <h2>Whats Your Plan For Today?</h2>
      <button className='btn' onClick={addTask}>Add Task</button>
      <input onChange={handleChange}/>
     
      {todoList.map(task => {
        return (
          <div>
            <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} 
            completedTask={completedTask} completed={task.completed}  
             />
          </div>
        )
      })}
    </div>
  );
  }

export default App;
