import React from 'react';
import "../../Css/SideBar.css";
import { SideBarData } from '../Data/SideBarData';
import { Link } from 'react-router-dom';


function SideBar(props) {
  return (
    <div className={`sidebar`}>
      <ul className='SideBarList'>
        {SideBarData.map((val,key)=>{
          return (
            <li key={key} className='SideBarItem' >
              <Link className='SideBarItem' to={`${val.link}`}>
              <div id="icon" >{val.icon}</div>{" "}
              <div id='title' >{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideBar
