import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import Order from "../pages/order/Order";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyCart from "../pages/dashboard/myCart/MyCart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import UpdateItems from "../pages/dashboard/manageItems/updateItems/UpdateItems";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import UserHome from "../pages/dashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <OurMenu />
      },
      {
        path: 'order/:category',
        element: <Order />
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret /></PrivateRoute>
      },
      // login logout
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      }
    ]
  },
  // dashboard rout;
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'user-home',
        element: <UserHome />
      },
      {
        path: 'my-cart',
        element: <MyCart />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'user-payment-history',
        element: <PaymentHistory />
      },
      // admin rout;
      {
        path: 'admin-home',
        element: <AdminHome />
      },
      {
        path: 'admin-add-items',
        element: <AdminRoute><AddItems /></AdminRoute>
      },
      {
        path: 'admin-manage-items',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'admin-update-items/:id',
        element: <AdminRoute><UpdateItems /></AdminRoute>,
        loader: ({ params }) => fetch(`https://gourment-haven-restaurant-server.vercel.app/menu/${params.id}`)
      },
      {
        path: 'admin-all-users',
        element: <AllUsers />
      }
    ]
  }
]);