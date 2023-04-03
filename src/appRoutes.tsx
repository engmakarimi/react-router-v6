import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "./layouts";
import {
  CategoriesPage,
  BooksPage,
  ErrorPage,
  HomePage,
  LoginPage,
  SettingPage,
  BookDetailsPage,
} from "./pages";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
        children: [
          {
            path: ":category",
            element: <BooksPage />,
            children: [
              { path: ":bookId", element: <BookDetailsPage /> },
              {
                index: true,
                element: <h4>Please select a book</h4>,
              },
            ],
          },
          {
            index: true,
            element: <h4>Please select a category</h4>,
          },
        ],
      },
      {
        path: "setting",
        element: <SettingPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
