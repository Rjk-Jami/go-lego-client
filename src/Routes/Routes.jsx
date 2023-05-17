import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import App from "../App.jsx";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage />,
      children: [
        {
        //   path: "contacts/:contactId",
        //   element: < />,
        },
      ],
    },
  ]);
  export default router;