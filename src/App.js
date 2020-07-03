import React, { useState } from "react";
import './App.css';
import { nanoid } from "nanoid";

// import SoundCloudAudio from 'soundcloud-audio'
// import cdj from './cdj'
// import playlister from './playlister'

// import Deck from './Components/Deck/Deck'
// import Playlist from './Components/Playlist/Playlist'
import SongItem from './Components/SongItem/SongItem'
import Form from './Components/Form/Form'
import Filterbutton from './Components/Filterbutton/Filterbutton'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Played: task => task.completed
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function App(props) {

  const [tasks, setTasks] = useState(props.tasks)



  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task=> {
      if (task.id === id){
        return {...task, played: !task.played}
        
      }
      return task;
    })
    setTasks(updatedTasks);

  }

  const taskList = tasks.map(task=> 
    (
      <SongItem title={task.title} id={task.id} played={task.played} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask} />
    )
  )




  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;



  function addTask(title) {
    const newTask = { id: "todo -" + nanoid(), title: title, played: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => id !== task.id)
      setTasks(updatedTasks)
    }
  
  function editTask(id, newTitle) {
    // console.log(id, newTitle)

    const updatedTasks = tasks.map(task=> {
      if (id === task.id){
        return {...task, title: newTitle}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  

  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
  return (
    <div className="todoapp stack-large">
      <h1>SoundThesia</h1>

      <Form addTask={addTask} />

      <Filterbutton />

      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >

        {taskList}


      </ul>
    </div>
  );
  

};

// export default App;
