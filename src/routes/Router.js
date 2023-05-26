
import { Navigate } from "react-router-dom";
//MAIN LAOUT OF THE PROJECT
import MainLayout from "../components/MainLayout/MainLayout";
//MAIN LAOUT OF THE PROJECT

//CONTAINER PAGES
import Reports from "../components/Reports/Reports";
import Projections from "../components/Projections/Projections";
import Summary from "../components/Summary/Summary";
import Login from "../components/Login/Login";
//CONTAINER PAGES


const ThemeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/projections" /> },
      { path: "/projections", exact: true, element: <Projections /> },
      { path: "/reports", exact: true, element: <Reports /> },
      { path: "/summary", exact: true, element: <Summary /> }
    ],
  },{
    path: "/login",
    element: <Login />,
  }
];

export default ThemeRoutes;
