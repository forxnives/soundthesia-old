import React from "react";

export default function Filterbutton({key, mode, isPressed, setFilter}) {



  function handleSubmit (){

    // console.log('what')

    setFilter(mode)




  }



  return (

        <button type="button" className="btn toggle-btn" aria-pressed={isPressed} onClick={()=>handleSubmit()}>
          <span className="visually-hidden">Show </span>
          <span>{mode}</span>
          <span className="visually-hidden"> tasks</span>
        </button>

  );
}