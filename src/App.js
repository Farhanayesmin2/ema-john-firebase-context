
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop'
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import { productAndCartLoader } from './Loaders/productAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'home',
          element: <Home></Home>,
        },
       
        {
          path: 'shipping',
          element:  <PrivateRoute><Shipping></Shipping> </PrivateRoute>     
        },
        {
          path: 'order',
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
    

      ]
    },
    {
      path: 'about',
      element: <About></About>
    },
  
  ]);
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
