import React from "react";
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { useState } from "react";
// import CompanyLogo from "./ComapnyLogo";
import { ReactComponent as LogoWhite } from "../../../assets/images/logos/adminprowhite.svg";
import user1 from "../../../assets/images/users/user4.jpg";
import { useNavigate } from "react-router";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const handleLogout=()=>{
    window.sessionStorage.clear();
    navigate('/login');
  }
  return (
    <Navbar color="white" light expand="md" className="fix-header ">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
         COMPANY LOGO {/* Company Logo  */}
          
        </div>
        <NavbarBrand href="/">
          <LogoWhite className="d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu className="offset-my-1">
            <DropdownItem><i className="bi bi-person-lines-fill"></i> My Profile</DropdownItem>
            <DropdownItem><i className="bi bi-shield-fill"></i> Privacy</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={handleLogout}><i className="bi bi-box-arrow-right"></i> Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
