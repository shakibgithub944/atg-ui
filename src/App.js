import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])

function App() {
  return (
    <RouterProvider router={router} >

    </RouterProvider>
  );
}

export default App;
