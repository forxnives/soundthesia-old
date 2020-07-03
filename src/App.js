import React, { useState, useRef, useEffect } from "react";
import './App.css';
import { nanoid } from "nanoid";
import SongItem from './Components/SongItem/SongItem'
import Form from './Components/Form/Form'
import Filterbutton from './Components/Filterbutton/Filterbutton'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//THIS SECTION DOESN'T CHANGE EVERY RENDER, SO ITS OUTSIDE OF THE APP FUNCTION


//for keyboard users
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


//filter map and array to be used later for the filter
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_ARRAY = Object.keys(FILTER_MAP)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTING THE APP FUNCTION

export default function App(props) {

  //hooks for setting state for tasks and filter mode
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('All')

  
  //toggle checkbox for task completed
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task=> {
      if (task.id === id){
        return {...task, completed: !task.completed}
        
      }
      return task;
    })
    setTasks(updatedTasks);
  }


  //creating task list, filtering first if necesarry.  NOTE use () when iterating and returning jsx.  ALSO note we need to pass a 'key' prop.
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task=> 
      (
        <SongItem title={task.title} id={task.id} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask} />
      )
    )


  //creating button list, AGAIN, no curly braces, and passing key prop
  const buttonList = FILTER_ARRAY.map(mode => (
    <Filterbutton  key={mode} mode={mode} isPressed={mode === filter} setFilter={setFilter} />
  ))


  // this is for edge case of there being one task, 
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  //functions for changing state with hooks
  function addTask(title) {
    const newTask = { id: "todo -" + nanoid(), title: title, completed: false };
    setTasks([...tasks, newTask]);
  }


  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => id !== task.id)
      setTasks(updatedTasks)
  }
  

  function editTask(id, newTitle) {
    const updatedTasks = tasks.map(task=> {
      if (id === task.id){
        return {...task, title: newTitle}
      }
      return task
    })
    setTasks(updatedTasks)
  }


  //this section is for keyboard accessibility..refer to MDN docs (using useRef and useEffect hooks)
  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);


  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //RETURN section
    
  return (
    <div className="todoapp stack-large">
      <h1>toduzi</h1>
      
      <Form addTask={addTask} />
      
      <div className="filters btn-group stack-exception">
        {buttonList}
      </div>
      
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          {taskList}
      </ul>
    
    </div>

  );
};