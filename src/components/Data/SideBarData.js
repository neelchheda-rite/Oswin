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
        link:"home"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon />,
       link:"dashboard"
    },{
        title:"Summary",
        icon:<SummarizeIcon />,
       link:"summary"
    },{
        title:"Location",
        icon:<LocationOnIcon />,
       link:"location"
    },{
        title:"Vendor",
        icon:<PersonIcon />,
       link:"vendor"
    },{
        title:"Help",
        icon:<HelpIcon />,
       link:"help"
    }
];

