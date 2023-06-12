import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AddAClass from "../pages/Dashboard/InstructorsDashboard/AddAClass/AddAClass";
import MyClass from "../pages/Dashboard/InstructorsDashboard/MyClass/MyClass";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        //instructors
        {
          path: 'addAClass',
          element: <AddAClass></AddAClass>  
        },
        {
          path: '',
          element: <MyClass></MyClass>  
        }
      ]
    }
  ]);