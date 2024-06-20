import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";



const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
{
  path:"/Signup",
  element:<Signup/>
},
{ 
  path:"/Signin",
  element:<Signin/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <StoreContextProvider> 
  // <SocketContextProvider>
  // <App />
  // </SocketContextProvider>
  // </StoreContextProvider> 
  // </BrowserRouter>
  <RouterProvider router={router}/>
  
)
