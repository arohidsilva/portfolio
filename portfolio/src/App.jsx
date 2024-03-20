import './App.css';
import Homepage from './Homepage';
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
  }
];

const router = createBrowserRouter(routes);

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
