import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todolist from "./Todolist";

var destination = document.querySelector("#container");
// 'sends it' to the index.html div "container"

ReactDOM.render(
    <div>
        <Todolist/>
    </div>,
    destination
);