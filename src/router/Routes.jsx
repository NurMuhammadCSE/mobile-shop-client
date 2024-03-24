import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Phone from "../pages/Phone/Phone/Phone";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Cart from "../pages/Dashboard/Cart/Cart";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";

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
        path: "phone",
        element: <Phone></Phone>,
      },
      {
        path: "order/:brand",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItems></UpdateItems>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
    ],
  },
]);
