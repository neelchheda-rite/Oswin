import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Summary() {
  return (
    <>
      <div className='container mt-3' style={{backgroundColor:"aqua"}}>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"5rem",justifyItems:"right"}}>
       
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </>
  )
}
