import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import JobInfo from "./Components/JobInfo";
import AppliedJob from "./Components/AppliedJob";
import Statistics from "./Components/Statistics";
import ErrorPage from "./Components/ErrorPage";
import Blog from "./Components/Blog";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: () => fetch("/jobListing.json"),
      },
      {
        path: "jobInfo/:jobId",
        element: <JobInfo></JobInfo>,
        loader: ({ params }) => params.jobId,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/assignment.json"),
      },
    ],
  },

  {
    path: "/appliedJob",
    element: <AppliedJob></AppliedJob>,
    loader: () => fetch("/jobListing.json"),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
