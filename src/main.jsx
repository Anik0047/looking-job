import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import AllJobs from './components/AllJobs/AllJobs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:  [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/job/:id',
        element:<JobDetails></JobDetails>, 
        loader: () => fetch('/jobs.json')
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: 'jobs',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
