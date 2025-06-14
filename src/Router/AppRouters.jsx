import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Maninlayout from "../Layout/Mainlayout"
import About from '../Screens/About';
import Project from "../Screens/Project"
import Services from '../Screens/Services';
import Blog from '../Screens/Blog';
import CaseStudies from '../Screens/CaseStudies';
import Carres from '../Screens/Carres';
import Contact from '../Screens/Contact';
import BlogDetail from '../Screens/BlogDetail';


const router = createHashRouter([
  {
    path: '/',
    element: <Maninlayout/>,
    children: [
      {index:true,path:"/", element: <About/> },
      {path:"Project",element:<Project/>},
      {path:"Services",element:<Services/>},
      {path:'Blog',element:<Blog/>},
      {path:"Blogs/:id",element:<BlogDetail/>},
      {path:"Casestudies",element:<CaseStudies/>},
      // {path:"Carrer",element:<Carres/>},
      {path:"contact",element:<Contact/>}
    ],
  },
]);

function Approuter() {
  return <RouterProvider router={router} />;
}

export default Approuter;
