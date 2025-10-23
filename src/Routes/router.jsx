import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Plant from "../Pages/Plant";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PlantDetails from "../Pages/PlantDetails";





const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/plant',
        element: <Plant />
      },
      {
        path: '/myprofile',
        element: <MyProfile />
      },
      {
        path: '/plant-details/:plantId',
        element: <PlantDetails />,
        loader: async () => {
          const res = await fetch("/plant-data.json");
          if (!res.ok) throw new Error("Failed to load plant data");
          return res.json();
        },
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Register />
      },
    ],
  },
  {
    path: '*',
    element: <h2>Error 404 - Page Not Found</h2>
  },
]);

export default router;
