import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import App from "../App.jsx";
import Main from "../layout/Main";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        // {
        //   path: "/",
        //   element: < />,
        // },
      ],
    },
  ]);
  export default router;