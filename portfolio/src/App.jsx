import './App.css';
import Homepage from './Homepage';
import Certfications from './components/Certfications';
import Works from './components/Works';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path : '/' , 
    element : <Homepage />
  },
  {
    path : '/projects/' , 
    element : <Works />
  },
  {
    path : '/certifications/' , 
    element : <Certfications />
  }
];

const router = createBrowserRouter(routes , {basename: '/portfolio/'} );

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
