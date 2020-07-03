import React, { useState }  from "react";

export default function Form({addTask}) {

    const [title, setTitle] = useState('');


    function handleChange(e) {
        setTitle(e.target.value)

    }
    
    function handleSubmit(e) {
        e.preventDefault();
        addTask(title)
        setTitle("")
      }
    
    



    return (
        <form onSubmit= {handleSubmit}>
          <h2 className="label-wrapper">

          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={title}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
  
    );
  }