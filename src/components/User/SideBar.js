import React from 'react';
import "../../Css/SideBar.css";

function SideBar(props) {
  return (
    <div className={`sidebar bg-${props.mode}`}>
      Hello
    </div>
  )
}

export default SideBar
