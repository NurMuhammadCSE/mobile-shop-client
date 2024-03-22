import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Phone from "../pages/Phone/Phone/Phone";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'phone',
        element: <Phone></Phone>
      }
    ],
  },
]);
