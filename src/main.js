import React from "react"
import './App.css';


function hello(event){
    console.log(event.target.id)
}

function MainContent(props){
  return (
    <div className="mid">
      <ul className="list-group">
        <li className="list-group-item" >
          <input type="checkbox" class="custom-control-input" id={props.id} name={props.text} onChange={props.onChange}/>
          <label class="custom-control-label" for={props.id}>
            <p>{props.text}</p>
          </label>
          <p class="text-muted">
            {props.description}
          </p>
        </li>
      </ul>
    </div>
)
};

export default MainContent
