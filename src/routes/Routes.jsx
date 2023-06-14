import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AddAClass from "../pages/Dashboard/InstructorsDashboard/AddAClass/AddAClass";
import MyClass from "../pages/Dashboard/InstructorsDashboard/MyClass/MyClass";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import Feedback from "../pages/Dashboard/AdminDashboard/Feedback/Feedback";
import Instructors from "../pages/Home/Instructors/Instructors";
import Classes from "../pages/Home/Classes/Classes";

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
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
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
        //admin
        {
          path: 'manageClasses',
          element: <ManageClasses></ManageClasses>  
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers> 
        },
        {
          path: 'feedback',
          element: <Feedback></Feedback> 
        },
        //instructors
        {
          path: 'addAClass',
          element: <AddAClass></AddAClass>  
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>  
        },

      ]
    }
  ]);