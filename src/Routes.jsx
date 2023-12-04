import ErrorPage from "@components/ErrorPage"
import FoodStore from "@components/FoodStore";
import MainLayout from "@layouts/MainLayout";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/cashier" replace />,
      },
      {
        path: "cashier",
        element: <FoodStore />,
        index: true,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ]
  },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes
