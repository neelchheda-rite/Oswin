import React from 'react';
import "../../Css/SideBar.css";
import { SideBarData } from '../Data/SideBarData';


function SideBar(props) {
  return (
    <div className={`sidebar`}>
      <ul className='SideBarList'>
        {SideBarData.map((val,key)=>{
          return (
            <li key={key} className='SideBarItem' onClick={()=>{window.location.pathname=val.link}}>
              <div id="icon" >{val.icon}</div>{" "}
              <div id='title' >{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideBar
