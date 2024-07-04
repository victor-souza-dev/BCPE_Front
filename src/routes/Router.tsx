import {
    createBrowserRouter,
    RouteObject,
    RouterProvider
} from "react-router-dom";

import { NotFound } from "src/pages/Exceptions/NotFound";

import { ExtractCssToJson } from "src/pages/ExtractCssToJson/Index";
import App from "../App";

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ExtractCssToJson />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Router = () => (
  <RouterProvider
    router={createBrowserRouter(router, {
      basename: import.meta.env.VITE_PUBLIC_URL,
    })}
  />
);

export default Router;
