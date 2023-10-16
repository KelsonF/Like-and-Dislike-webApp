import { createBrowserRouter } from "react-router-dom";
import { TaskPage } from "../pages/TaskPage";
import Root from "../App";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

const base_url = "http://localhost:3000/topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "tasks",
        element: (
          <ProtectedRoutes>
            <TaskPage />
          </ProtectedRoutes>
        ),
        loader: async () => {
          return fetch(`${base_url}`);
        },
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export { router };
