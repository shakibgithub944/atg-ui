import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetails from './Components/UserDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/details/:id',
        element: <UserDetails></UserDetails>,
        loader: async ({ params }) => {
          return fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`);
        },
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} >

    </RouterProvider>
  );
}

export default App;
