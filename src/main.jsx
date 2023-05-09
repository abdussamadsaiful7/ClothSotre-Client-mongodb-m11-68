import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import Header from './Components/Header';
import AddCloth from './Components/AddCloth';
import UpdateCloth from './Components/UpdateCloth';
import Contact from './Components/Contact';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/cloth')
      },
      {
        path: '/addCloth',
        element: <AddCloth></AddCloth>
      },
      {
        path: '/updateCloth/:id',
        element: <UpdateCloth></UpdateCloth>,
        loader: ({params}) => fetch(`http://localhost:5000/cloth/${params.id}`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
  {
    path: '/header',
    element: <Header></Header>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
