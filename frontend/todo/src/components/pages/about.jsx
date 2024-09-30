import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../pagestyle/homestyle.css'


function about () {
  return ( 
    <div className="dis">
        <h1 className="text-center">What I DO do?</h1>
        <p className="text-center">i do is a todo list platform where you can track and organize your day as you wish<br/> and want write what on your mind accomplish the task you want</p>
        <button className="btn bt-danger" id="btn">
          <NavLink to="/task">Get Started</NavLink>
        </button>
    </div>
  );
}

export default about;