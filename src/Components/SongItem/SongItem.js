import React, { useEffect, useRef, useState } from "react";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}



export default function Todo({title, id, completed, key, toggleTaskCompleted, deleteTask, editTask}) {



    const [isEditing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('')
    const wasEditing = usePrevious(isEditing);


    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    useEffect(() => {
      if (!wasEditing && isEditing) {
        editFieldRef.current.focus();
      }
      if (wasEditing && !isEditing) {
        editButtonRef.current.focus();
      }
    }, [wasEditing, isEditing]);


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
                className="todo-text" 
                type="text"
                onChange={handleEdit} 
                ref={editFieldRef} />
          </div>
          <div className="btn-group">
            <button type="button" onClick={() => setEditing(false)} className="btn todo-cancel">
              Cancel
              <span className="visually-hidden">renaming {title}</span>
            </button>
            <button type="submit" onClick={handleSubmit} className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {title}</span>
            </button>
          </div>
        </form>
      );
      
      
      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input id={id} type="checkbox" onChange={() => toggleTaskCompleted(id)}  defaultChecked={completed} />
              <label className="todo-label" htmlFor="todo-0">
              {title}
              </label>
          </div>
          <div className="btn-group">
              <button type="button" className="btn" onClick={() => setEditing(true)} ref={editButtonRef}>
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