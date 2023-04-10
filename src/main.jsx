import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import JobInfo from "./Components/JobInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: () => fetch("/public/jobListing.json"),
      },
      {
        path: "jobinfo/:jobId",
        element: <JobInfo></JobInfo>,
        // loader: () => fetch("/public/jobListing.json"),
        loader: ({ params }) => params.jobId,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
