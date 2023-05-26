
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Projections from "../components/Projections/Projections";
import Summary from "../components/Summary/Summary";
import Login from "../components/Login/Login";

/****Layouts*****/
import MainLayout from "../components/MainLayout/MainLayout";




/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/projections", exact: true, element: <Projections /> },
      { path: "/summary", exact: true, element: <Summary /> },
    //   { path: "/about", exact: true, element: <About /> },
    //   { path: "/alerts", exact: true, element: <Alerts /> },
    //   { path: "/badges", exact: true, element: <Badges /> },
    //   { path: "/buttons", exact: true, element: <Buttons /> },
    //   { path: "/cards", exact: true, element: <Cards /> },
    //   { path: "/grid", exact: true, element: <Grid /> },
    //   { path: "/table", exact: true, element: <Tables /> },
    //   { path: "/forms", exact: true, element: <Forms /> },
    //   { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },{
    path: "/login",
    element: <Login />,
  }
];

export default ThemeRoutes;
