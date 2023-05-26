import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar  from "@mui/material/Toolbar";
import assets from "../../../assets/index"
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

import { Link } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SidebarComponent = () => {

  return (
    
    <List disablePadding>
         <Toolbar >
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        <Menu className="mainMenu" style={{width:sizeConfigs.sidebar.width }}  >
          <MenuItem className="menu1" >
            <h2> OSWIN</h2>
          </MenuItem>
          <MenuItem icon={<GridViewRoundedIcon />} active > Dashboard </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />} component={<Link to="/report" className="link" />}  > Reports </MenuItem>
          <MenuItem icon={<BatchPredictionIcon />} component={<Link to="/projections" className="link" />}>Projections</MenuItem>
        </Menu>
      </List>
   
 
     
  );
};

export default SidebarComponent;