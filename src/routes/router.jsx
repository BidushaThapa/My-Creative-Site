import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout"; // ✅ import RootLayout here
import Home from "../pages/Home";
import Done from "../pages/Done";
import About from "../pages/About";
import Todos from "../pages/Todos";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // RootLayout wraps all child routes
    children: [
      { 
        index: true,
         element: <Home /> 
        },
        {
          path:"/Todos",
          element:<Todos/>
        },
        {
          path:"/Done",
          element:<Done/>
        },
       { 
         path:"/About",
         element: <About/> 

        },
    ],
  },
]);
