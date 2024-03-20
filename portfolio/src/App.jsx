import './App.css';
import Homepage from './Homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
  path : '/' , 
  element : <Homepage />
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
