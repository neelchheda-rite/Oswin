import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';

export const SideBarData=[
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/"
    },{
        title:"Report",
        icon:<SummarizeIcon />,
        link:"/"
    },{
        title:"Location",
        icon:<LocationOnIcon />,
        link:"/"
    },{
        title:"Vendor",
        icon:<PersonIcon />,
        link:"/"
    },{
        title:"Help",
        icon:<HelpIcon />,
        link:"/"
    }
];

