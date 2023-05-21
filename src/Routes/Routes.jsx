import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRoute from "./PrivetRoutes";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";


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
          element: <PrivetRoute><AddAToy/></PrivetRoute>,
        },
        {
          path: "/myToys",
          element: <PrivetRoute><MyToys/></PrivetRoute>,
        },
        {
          path: "/allToys",
          element: <AllToys/>,
        },
        {
          path: "/allToys/:id",
          element:<PrivetRoute> <ToyDetails/></PrivetRoute>,
          loader: ({params})=>fetch(`https://go-lego-server.vercel.app/allToys/${params.id}`)
        },
        {
          path: "/updateToys/:id",
          element:<PrivetRoute><UpdateToys/></PrivetRoute>,
          loader: ({params})=>fetch(`https://go-lego-server.vercel.app/updateToys/${params.id}`)
        },
      ],
    },
  ]);
  export default router;