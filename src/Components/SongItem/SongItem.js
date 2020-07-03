import React, { useState } from "react";

export default function Todo({title, id, played, key, toggleTaskCompleted, deleteTask, editTask}) {

    const [isEditing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('')

    function handleEdit (e) {
        
        setNewTitle(e.target.value);


    }

    function handleSubmit (event){
        event.preventDefault();
        editTask(id, newTitle);
        setNewTitle("");
        setEditing(false);
        // console.log(id, newTitle)


    }

    

    const editingTemplate = (
        <form className="stack-small">
          <div className="form-group">
            <label className="todo-label" htmlFor={id}>
              New name for {title}
            </label>
            <input id={id}
                value={newTitle}
                onChange={handleEdit} 
                className="todo-text" type="text" />
          </div>
          <div className="btn-group">
            <button type="button" onClick={() => setEditing(false)} className="btn todo-cancel">
              Cancel
              <span className="visually-hidden">renaming {title}</span>
            </button>
            <button type="button" onClick={handleSubmit} className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {title}</span>
            </button>
          </div>
        </form>
      );
      
      
      const viewTemplate = (
        <div className="stack-small">
        <div className="c-cb">
            <input id={id} type="checkbox" onChange={() => toggleTaskCompleted(id)}  defaultChecked={played} />
            <label className="todo-label" htmlFor="todo-0">
            {title}
            </label>
        </div>
        <div className="btn-group">
            <button type="button" onClick={() => setEditing(true)} className="btn">
            Edit <span className="visually-hidden">{title}</span>
            </button>
            <button type="button" onClick={() => deleteTask(id)} className="btn btn__danger">
            Delete <span className="visually-hidden">{title}</span>
            </button>
        </div>
        </div>
      );

    
      return (
        <li className="todo">
            {isEditing ? editingTemplate : viewTemplate}
        </li>
  
    );
  }