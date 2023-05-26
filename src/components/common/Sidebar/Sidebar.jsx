// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Toolbar  from "@mui/material/Toolbar";
// import assets from "../../../assets/index"
// import colorConfigs from "../../../configs/colorConfigs";
// import sizeConfigs from "../../../configs/sizeConfigs";
// import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
// import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

// import { Link } from 'react-router-dom';
// import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// const SidebarComponent = () => {

//   return (
    
//     <List disablePadding>
//          <Toolbar >
//           <Stack
//             sx={{ width: "100%" }}
//             direction="row"
//             justifyContent="center"
//           >
//             <Avatar src={assets.images.logo} />
//           </Stack>
//         </Toolbar>
//         <Menu className="mainMenu" style={{width:sizeConfigs.sidebar.width }}  >
//           <MenuItem className="menu1" >
//             <h2> OSWIN</h2>
//           </MenuItem>
//           <MenuItem icon={<GridViewRoundedIcon />} active  component={<Link to="/dashboard" className="link" />} > Dashboard </MenuItem>
//           <MenuItem icon={<ReceiptRoundedIcon />} component={<Link to="/report" className="link" />}  > Reports </MenuItem>
//           <MenuItem icon={<BatchPredictionIcon />} component={<Link to="/projections" className="link" />}>Projections</MenuItem>
//         </Menu>
//       </List>
   
 
     
//   );
// };

// export default SidebarComponent;

import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Alert",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "Login",
    href: "/login",
    icon: "bi bi-people",
  },
];

const SidebarComponent = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/adminpro-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
