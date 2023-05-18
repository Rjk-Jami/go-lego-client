import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import App from "../App.jsx";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Login/Login";
import Register from "../Pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
        {
          path: "/addAToy",
          element: <AddAToy/>,
        },
        {
          path: "/myToys",
          element: <MyToys/>,
        },
        {
          path: "/allToys",
          element: <AllToys/>,
        },
      ],
    },
  ]);
  export default router;