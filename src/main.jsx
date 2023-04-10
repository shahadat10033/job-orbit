import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import JobInfo from "./Components/JobInfo";
import AppliedJob from "./Components/AppliedJob";

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
        loader: ({ params }) => params.jobId,
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
