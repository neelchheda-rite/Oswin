import React from 'react';
import "../../Css/SideBar.css";

import { Link } from 'react-router-dom';
import { Sidedata } from './Sidedata';


function Reports(props) {
  return (
    <div className={`sidebar`}>
      <ul className='SideBarList'>
        {Sidedata.map((val,key)=>{
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

export default Reports
