import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import ExercisesDetails from "./pages/ExercisesDetails";

const router = createBrowserRouter([
  {
    path: "/fitness-exercises-app",
    element: <AppLayout />,
    children: [
      {
        path: "/fitness-exercises-app",
        element: <Home />,
      },
      {
        path: "/fitness-exercises-app/exercises/:id",
        element: <ExercisesDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
