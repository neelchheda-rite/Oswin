
import { Navigate } from "react-router-dom";
//MAIN LAOUT OF THE PROJECT
import MainLayout from "../components/MainLayout/MainLayout";
//MAIN LAOUT OF THE PROJECT

//CONTAINER PAGES
import Summary from "../components/Views/Summary/Summary";
import Reports from "../components/Views/Reports/Reports";
import Projections from "../components/Views/Projections/Projections";
import Login from "../components/Views/Login/Login";
//CONTAINER PAGES


const ThemeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/projections" /> },
      { path: "/projections", exact: true, element: <Projections /> },
      { path: "/reports", exact: true, element: <Reports /> },
      { path: "/summary", exact: true, element: <Summary /> },
      { path: "/privacy", exact: true, element: <Summary /> },
      { path: "/profile", exact: true, element: <Summary /> }
    ],
  },{
    path: "/login",
    element: <Login />,
  }
];

export default ThemeRoutes;
